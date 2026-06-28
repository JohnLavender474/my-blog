---
section: "Thoughts & Opinions"
title: "Quietly Bypassed, One Personal Solution at a Time"
date: 2026-06-28
meta: 
  title: "Quietly Bypassed, One Personal Solution at a Time"
  description: "Blog Post - Quietly Bypassed, One Personal Solution at a Time"
---

I've seen people (connections, coworkers, random people online) use coding agents to build custom solutions for certain problems.

In many ways, this is a very good thing. That specific workflow you need when working with 30+ PDFs all at once? You can vibe-code an app for that. Those smart home devices that the manufacturer decided to make obsolete? Build a custom web app that runs on a home server in order to keep supporting those devices yourself. These are two real examples I've seen recently.

And yet, there's an aspect that's typically overlooked, one that has less to do with whether the solution was redundant — both of the examples above have open-source counterparts — and more to do with what happens to the knowledge generated along the way.

The first example is a custom PDF viewer: it lets you scroll through a document's pages by scrolling horizontally, and scroll between docs vertically. Simple, yet powerful. I saw this example app on the r/vibecoding subreddit. The creator said they never coded even once in their life, and they needed the app to deal with dozens of PDF docs for a mortgage application. Most of the comments on the post were praising the app as unique and super helpful. However, some other comments, further down, stated that these functionalities already exist in well-established open-source PDF viewers. The creator responded that they wanted some extra customization, to which at least one commenter said that forking the open-source app and/or opening a PR might have been the better approach.

The second example is similar in shape, even if the domain is different. Someone wanted to keep using smart home devices, but the manufacturer decided to stop supporting the web app used to control them. So, they built their own custom app running on a home server. A well-established open-source app already exists out there for the exact line of devices being deprecated here. Yet, they built their own version from scratch. Did the coding agent ever once suggest looking into the open-source version? Or did it jump straight into the duplicative work?

Here's what strikes me about this phenomenon. Whatever net-new gains may have been learned and achieved in this process is rarely ever passed on to another human.

Software has always had open-source projects as a kind of commons: a shared body of work where someone's fix or better idea gets folded back in and made available to everyone else. That commons grows because contributing to it (submitting a PR, writing up an issue, even just forking and documenting why) has historically required enough friction that people doing the work also engaged with the existing project: read its code, understood its architecture, argued with its maintainers about design choices. The friction was annoying and time-consuming, but it was also where the learning and the sharing happened in real time.

Coding agents remove a lot of that friction, but they remove it on the demand side, not the contribution side. It's now trivial to get exactly what you want without touching the existing codebase at all. This means it's also trivial to never read the existing codebase, never understand why it works the way it does and why your own solution may break under certain conditions, and never have anything to contribute back. The creator didn't fork the open-source project and choose not to upstream their changes; they never went near it in the first place. There was no PR to write, because there was no engagement with the original. (The proliferation of sloppy PRs being opened by unattended coding agents on open-source repos is a different conversation entirely.)

To clarify. this is a different problem from "redundant work". Redundant work has always existed. Programmers reinvent wheels constantly, many times (though not always) for good reason. The difference is that reimplementing something by hand, even badly, used to mean grappling with the problem space enough that you'd come out the other side having gained some level of new understanding. You'd hit the same edge cases the original maintainers hit, and sometimes you'd find a better solution and bring it back. Vibe-coding something out from scratch via an agent skips a lot of that grappling. You get the artifact without the understanding.

I'm not passing judgment on the people doing this. Building a tool that fits your exact needs is a completely reasonable thing to want, and asking why someone didn't read an open-source codebase before solving their own problem is nowadays an unreasonable bar to expect of everyone. But zoom out, multiply this by however many people are doing it, and the collective software commons isn't growing the way it used to. It's being quietly bypassed, one personal solution at a time, each one slightly diminishing the incentive, and maybe even the practical ability, for anyone to go contribute to the shared version instead.

What happens from here? Do creators end up siloed, each living in their own chamber of personalized, one-off apps? Or does some of that scattered learning eventually make its way back into the collective pool anyway, not through PRs and forks, but via the models themselves as they're trained on more of this kind of work? If that's the path, it's worth asking what kind of commons that actually is: one anyone can still inspect and build on (the way an open-source repo can be), or one that's gate-kept by whoever is training and supplying the LLM?  