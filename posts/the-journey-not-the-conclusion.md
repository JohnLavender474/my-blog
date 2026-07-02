---
section: "Thoughts & Opinions"
title: "The Journey, Not the Conclusion: Testing Fable 5 vs Opus 4.8 on a Real Bug"
date: 2026-07-01
meta: 
  title: "The Journey, Not the Conclusion: Testing Fable 5 vs Opus 4.8 on a Real Bug"
  description: "The Journey, Not the Conclusion: Testing Fable 5 vs Opus 4.8 on a Real Bug"
---

# The Journey, Not the Conclusion: Testing Fable 5 vs Opus 4.8 on a Real Bug

The most complicated personal project I have is a game written in Kotlin using the LibGDX library. The game has about 5 years' worth of development, design decisions, and tech debt accrued. I figured this would be a good project on which to test out the capabilities of the newly re-released Claude Fable model.

Some weeks back, I discovered a bug in the game that I was able to fix. But first, some necessary context.

## The setup

The game is a 2D platformer where the player runs, jumps, and climbs his way through rooms filled with enemies and hazards. Between each room is a "screen transition" where the player is momentarily unable to be controlled as he moves from one room to the next, and during the transition certain dynamic objects such as enemies and hazards are despawned in the prior room and spawned in the next room.

The bug would occur between two rooms — rooms 8 and 9, as they're numbered in the stage. Room 8 has a checkpoint (if the player dies, then he respawns at the latest checkpoint). Room 9 has a "pushable block" (a block that the player can push) that spawns when the player enters the room. The block spawns on a ledge and has gravity applied to it, and the goal is for the player to push it onto a "switch button" on the floor; when the block lands on the button and pushes it down, a gate that leads to room 10 is opened.

Two spawning rules matter here, and they're different from each other in an important way.

All of the terrain blocks (the floor, the ceiling, and the walls) are spawned only when their bounds overlap the game camera's bounds, and are despawned as soon as they leave the camera's bounds. This is a purposeful optimization to reduce the number of entities having to be processed at any given moment.

The pushable block, on the other hand, spawns in as soon as the player enters the room, even if it's not within the game camera's bounds, and it persists until one of the following conditions is true:

1. The `PLAYER_SPAWN` event occurs (when the player spawns) AND the current game room is NOT the same room as the one in which the block spawns, or
2. The `END_ROOM_TRANS` event occurs (when the player's transition from one room into the next finishes) AND (again) the current game room is NOT the same as the one in which the block spawns.

One note on "the current game room": that value is registered by the game's camera manager, which — in addition to handling camera movement — is the system that detects what room the player is currently in. Keep that in mind, because it's the entire bug.

## The bug

In previous versions (commits) of the game, there was no way for the player to die in room 9. No hazards, no enemies, nothing. However, at some point, I added an enemy and some spike hazards into the room, which introduced the ability for the player to die in the room. And, at some point during one of my test playthroughs, I did die in that room.

After respawning into room 8 and then re-entering room 9, I saw that the pushable block would not spawn in at all; I would have to leave room 9 back into room 8, and then re-enter room 9 a 2nd time, at which point the pushable block would be respawned correctly.

Why? Look at the respawn sequence as it existed then:

1. `PLAYER_DEATH` event
2. camera manager stops processing
3. `PLAYER_SPAWN` event
4. player is positioned at checkpoint
5. camera manager restarts processing

As you can probably tell, there's a glaring issue here: the pushable block is set to die when the `PLAYER_SPAWN` event occurs IF the current game room doesn't match the block's room, but the camera manager retains the stale value of room 9 until after the `PLAYER_SPAWN` event is fired. The cull check compares room 9 against room 9, comes up false, and the block survives the death. Then, when the player walks back into room 9, `END_ROOM_TRANS` fires with the current room equal to the block's room — false again. The stale block is still alive, so the spawner never re-fires. Only by leaving and re-entering a 2nd time does a transition finally fire with a mismatched room, cull the old block, and allow a fresh spawn.

## The fix

The solution I implemented was to introduce a new event to the game lifecycle: `PLAYER_SPAWN_INIT`. The updated flow:

1. `PLAYER_DEATH` event
2. camera manager stops processing
3. `PLAYER_SPAWN_INIT` event
4. player is positioned at checkpoint
5. camera manager restarts processing
6. `PLAYER_SPAWN` event

In order to fix the flow of events while still maintaining support for other processes/entities that listen for the player spawn event, other systems now listen to `PLAYER_SPAWN_INIT` (which fires at the same point in the sequence as the old `PLAYER_SPAWN` event did) while the pushable block listens to the `PLAYER_SPAWN` event, which now triggers AFTER the player is positioned and the camera manager is updated, rather than BEFORE.

Maybe not the cleanest approach, but it works well enough and has some benefits of its own. (More on that "maybe" later — this decision comes back around.)

## The experiment

Now, on to the real "juicy part" of this post. Just today, Claude Fable was re-released to the public after being export-controlled by the US government (a dramatic turn of events for anyone witnessing it). Obviously, I had to give the new model a proper whirl, and I figured this bug would be a great testing ground to compare Fable against Opus 4.8.

I checked out the commit directly before the one where I applied the fix, and I prompted Fable and Opus in separate sessions with the query:

> "I've run into an issue that occurs in the stage. In room 8, there is a player checkpoint. In room 9, there is a pushable block. If the player dies in room 9, then will the pushable block always properly respawn when the player re-enters the room after respawning?"

Two caveats about the methodology, in the interest of honesty. First, the prompt is leading: I name the checkpoint, I name the block, and the word "always" all but announces that the answer is no. This is the minimum amount of context I'm willing to hand off to an agent. So, this is a test of diagnostic tracing — can the model find *why* — not a test of bug discovery. Second, the commit I checked out was itself a change related to this area of the code, which means the most recent activity in the repo was quietly pointing toward the bug. Whether a model noticed that turned out to be one of the more interesting differences.

## The results

Both models came to the same conclusion: if the player pushed the block in room 9, died, respawned in room 8, and re-entered room 9, then the pushable block would continue to be where it was when the player died, rather than being respawned and thereby reset at its intended initial position.

One thing both models missed: the block doesn't just sit there. It sits where it was pushed only while the camera remains in room 9 — once the player respawns in room 8 and the camera follows, the floor beneath the block gets culled (remember, terrain only exists within camera bounds), and the block, which has gravity applied, begins falling in perpetuity below the no-longer-existing floor. So the stale block isn't merely mispositioned; by the time the player re-enters the room, it's gone somewhere beneath the world entirely. Neither frontier model connected those two systems, and I'll come back to why that might be.

But the difference between the two models isn't so much in the conclusion but rather in the journey.

## The journey

My first impression reading the transcripts was that Opus leaned less on the project's existing skills (for example, a "level-analyzer" skill that points to a Python script which reads a level's XML file and transforms its layers and rooms into plain-text visualizations) and more on its own "creative" reasoning.

And here's where this post gets a little recursive: rather than just writing up my impressions, I gave both transcripts to Fable itself — in the Claude app this time, not Claude Code — and asked for its observations of the two models' behaviors. Yes, I asked Fable to judge a contest that Fable was competing in. Grain of salt acquired. But its analysis was sharper than my first read, starting with a correction of my "creative reasoning" take:

> You're partially right, but I'd refine the observation. Both models actually used the level-analyzer utility — the difference is *how*. Fable formally loaded both skills (the "entity-lifecycle" and "level-analyzer" skills) before touching anything, then ran the analyzer script as the skill instructs. Opus loaded only the "entity-lifecycle" skill, then invoked `utils/level-analyzer/analyze.py` directly without loading the skill that documents it. So it's less "didn't use the skills" and more "used the tooling without the guardrails" — it found the script on its own but skipped the formal skill-load step.

And on whether "creative" was even the right word for what Opus was doing:

> What Opus actually did reads more like exhaustive, paranoid verification than creativity. Look at the trace: it independently confirmed the `EventsManager` dispatch semantics (queued, synchronous single-pass, listener-registration order), verified that entities that use `CullableOnEvent` evaluate its predicate at event-receipt time rather than deferred, and checked the render-loop [...] before committing to a conclusion. It refused to infer anything it hadn't read. Fable, by contrast, made bigger inferential jumps — fewer tool calls, more targeted reads [...] It trusted its model of the system earlier. If anything, Fable's run is the more "confident" one and Opus's is the more "show your work" one.

That tracks with the raw numbers: Fable wrapped up in 3 minutes 32 seconds with a clean trace; Opus took 5 minutes 3 seconds and fumbled one malformed grep along the way. But "faster" isn't the whole story, because the two models took genuinely different investigative strategies. Remember the second methodology caveat — the checked-out commit being related to the bug? Fable never looked at it. Opus read it almost immediately:

> Opus did git archaeology; Fable didn't. Opus's second move was `git show c17c89f6` — the commit that was checked out during the sessions — and it turned out to be directly relevant. Its final answer even ties the bug to intent: "this is exactly what the `game.getCurrentRoom()` change in commit c17c89f6 was trying to enable." That's a genuinely different investigative strategy: ground in what the developer was just working on. Fable went straight to the level data and code as they exist now.

On the flip side, Fable surfaced something Opus never found:

> Fable found an edge case Opus missed. Fable noticed the despawn/respawn behavior is death-type-dependent: if Megaman's focus bounds leave room 9 before death (a death by falling into a pit that leaves the room), [...] the block *does* reset correctly. So spike/enemy deaths leave the block's position stale while pit deaths don't. That's a subtle, non-obvious wrinkle — and arguably the most impressive single observation in either transcript.

(Fable calling Fable's observation "arguably the most impressive" in the comparison — see aforementioned grain of salt. But having verified it against the code, it's also just true: the bug I hit only exists because the deaths I added to room 9 were spikes and an enemy, deaths that happen *inside* the room. If I'd added a bottomless pit instead, I might never have seen it.)

As for the perpetual-falling-block detail that both models missed, Fable had a take on why:

> Worth observing *why*: neither model was prompted to reason about what happens to the stale block over time, only whether it respawns. It's a good example of models answering the question as scoped rather than simulating the world forward.

I find that framing useful and slightly unsettling in equal measure. Both models correctly traced a multi-system event-ordering bug through thousands of lines of code, and neither asked the follow-up question a play-tester would ask instinctively: *okay, and then what happens to the block?* The models are strong at the question you asked and indifferent to the question you didn't. This isn't necessarily a bad thing — at what point would the model halt if its behavior were to keep moving forward in the cause-and-effect chain? But, it's worth calling out regardless as what is arguably a limitation of even the most capable frontier AI model yet.

## The fix I didn't write

Here's the part I didn't expect. Both models, independently, proposed the same fix — and it's not the one I implemented. They both suggested making the block cull unconditionally on `PLAYER_SPAWN` (or comparing against the respawn room instead of the stale current room): a small, local change to the block's cull predicate. My fix, as described above, restructured the event lifecycle itself.

Fable's read on that convergence:

> Their suggested fix is arguably simpler and more localized, while yours preserves the semantic meaning of "player spawn" for the block (fire after state is settled) at the cost of a new lifecycle event. Neither model proposed reordering the event lifecycle itself, which suggests they both defaulted to the minimal-diff fix rather than the architectural one.

I'll defend my version, with the benefit of hindsight and a little prodding. The minimal-diff fix patches the pushable block and leaves the trap armed: any future entity that listens for `PLAYER_SPAWN` and reads the current room will hit the exact same stale value, and I (or a model) will get to re-discover this bug wearing a different costume. Reordering the lifecycle means `PLAYER_SPAWN` now fires when the world is actually in its post-spawn state, which is what every listener presumably wants. 

That said, I'll cop to the naming irony, which is that the event called `PLAYER_SPAWN_INIT` carries the *old* timing, which means the meaning of the unsuffixed `PLAYER_SPAWN` changed out from under every existing listener. If a future contributor — or a future model — guesses wrong about which one fires first, I'll have earned it. In hindsight, maybe it would've been better in regard to semantics to name the events `PLAYER_SPAWN_START` and `PLAYER_SPAWN_COMPLETE` where the "complete" suffix signals to event listeners that the spawn is finished and therefore the world state is ready.

## The takeaway

Same conclusion, different journeys, and the journeys are where the signal is. Fable was faster, more readily used the skill files I'd written, made larger correct inferences per tool call, and found an edge case that nobody — including me — knew about.

Opus, while also very competent, was slower, cast much wider nets in its approach to gathering context, and did more work to verify every link in its causal chain before committing to an answer.

Which one is ultimately better? If we're looking purely at time-to-answer, then Fable obviously wins. If we're looking at reliability of skill usage, then again Fable wins at least in my eyes since it properly used my "level-analyzer" skill rather than circumventing it to use the tool directly. However, I'm hesitant to say that Fable was better in every way than Opus. Opus had some tricks up its sleeve that Fable did not consider. Chief among them, checking the commit history — which, in fairness, was pointing right at the bug, but only Opus thought to look. And that's the real finding here.

Both models handed me the same correct conclusion. If all I'd read were the final answers, I'd have called it a tie and learned nothing. The differences — the skipped skill-load, the git archaeology, the pit-death edge case — live entirely in the transcripts. Reading the intermediary transcripts is a habit worth developing and maintaining as these models get better: the conclusions may converge long before the journeys do, and the journey is where you find out which model is best for what.