---
section: "Experience"
title: "The Implicit Wall: Attempting to Work With AI in Game Level Design"
date: 2026-06-11
meta: 
  title: "The Implicit Wall: Attempting to Work With AI in Game Level Design"
  description: "The Implicit Wall: Attempting to Work With AI in Game Level Design"
---

Last night I spent a couple of hours building skill files and context files for my game repo. They were tailored specifically for level-building in Tiled. If you've ever used Tiled, you know it's a powerful tool for building levels via a UI that are then saved into XML files to be loaded by the game engine. However, it can be intimidating and time-consuming to start from a blank canvas. That said, I figured having Claude generate tailored templates for new levels on the fly would significantly cut through the blank-canvas "writer's block" paralysis and save real time and effort for me.

The skill files covered everything: layer rules, per-object instruction files, and an iterative workflow with checkpoints for my feedback. I thought I'd crafted a solid workflow. What I got was a garbled mess.

Even after loading the skill file, Opus would skip steps specified in bold in the skill's WORKFLOW section. It also spun up sub-agents for certain tasks, some of which were useless or actively harmful to the overall task. When I tried to cancel them, Opus kept recreating them in a loop until I gave up, let them finish, and told Claude later on to ignore their output. Even when I asked for very simple level templates, the results still violated rules that I could confirm Opus had read via the linked instructions files. All of this burned through a massive number of tokens.

At one point I asked Opus directly how to redesign the workflow for better results. It admitted the workflow was already fairly optimal. And then, in its own words, it named the crux: I was hitting a fundamental ceiling. Model output is driven almost entirely by statistical pattern matching on training data. That's why even the most basic design rules I'd laid out kept getting violated, even after I gave it a large set of detailed instructions, skills, workflows, and hand-built reference maps.

It's amazing how Opus can be so powerful in building complex logic in certain scenarios without much hand-holding, yet here it continually failed to build even basic patterns correctly despite all the hand-holding I could give. The core problem is that many things that these models excel at follow explicit, sequential logic, and meanwhile level design in my game's framework doesn't. The rules for the levels are implicit: not encoded in the XML itself, but visible and legible to someone trained on how to build levels. That distinction is exactly what the model couldn't bridge.