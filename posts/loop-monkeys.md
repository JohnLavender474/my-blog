---
section: "Thoughts & Opinions"
title: "Loop Monkeys"
date: 2026-07-24
meta: 
  title: "Loop Monkeys"
  description: "Blog Post - Loop Monkeys"
---

I don't understand how anyone can be responsible for complex software without reading the code.

At work, I'm constantly heads-down in multiple sessions of Claude Code using Opus set to "high" effort. I'm using it to write specs, probe and debug across systems, poke holes in assumptions, create test suites, and more. I've got plugins installed and a suite of team-curated skills at Claude's disposal. I'm by no means an AI skeptic when it comes to software development.

And yet, I can't bring myself to get aboard the "loop engineering" train that certain famous figures in the tech world have advocated recently. Treating development as a black box with agents, in my experience, devolves sooner or later into a spaghetti mess.

Just today, I was implementing enhanced error handling to a service that's downstream from a major "orchestrator". Since the orchestrator is critical and depends on listening to signals from its sub-processes, I needed to be very careful in my approach. I worked with Claude to plan a minimum viable spec with unit tests and E2E tests planned out ahead of time. After reviewing the spec, I let it move forward to implement the changes. The code seemed solid. It met all the acceptance criteria. Except for one thing. After reading through the code myself line by line, I spotted something that seemed off. I ran Claude Code's `/code-review` command and told it to focus on that specific smell. It uncovered a genuine bug: an implicit edge case the spec had missed. That edge case might very well have made its way to production had I not done the due diligence to read and understand the code myself.

In the days of yore, there were "code monkeys": the ones who blindly copy/pasted code to build out shaky solutions. Today, we have "loop monkeys": engineers who mistake supervision for understanding.