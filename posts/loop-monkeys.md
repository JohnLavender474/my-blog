---
section: "Thoughts & Opinions"
title: "Loop Monkeys"
date: 2026-07-24
meta: 
  title: "Loop Monkeys"
  description: "Blog Post - Loop Monkeys"
---

I don't understand how anyone can be responsible for complex, critical software without reading the code.

At work, I'm constantly heads-down in multiple sessions of Claude Code using Opus set to "high" effort. I'm using it to write specs, probe and debug across systems, poke holes in assumptions, create test suites, and more. I've got plugins installed and a suite of team-curated skills at Claude's disposal. I'm by no means an AI skeptic when it comes to software development.

And yet, I can't bring myself to get aboard the "loop engineering" bandwagon. Treating development as a full black box — never pausing to read the critical changes with your own eyes — devolves, in my experience, into a spaghetti mess sooner or later.

Just recently at work, I was implementing enhanced error handling for a service that's downstream from a major "orchestrator". Since the orchestrator is critical and depends on listening to signals from its sub-processes, I needed to be very careful in my approach. I worked with Claude to plan a spec with tests. After reviewing the spec, I let it move forward to implement the changes. The code seemed solid. It met all the acceptance criteria. Except for one thing. After reading through the code line by line, I spotted something that seemed off. I ran Claude Code's `/code-review` command and told it to focus on that specific smell. It uncovered a genuine bug: an implicit edge case the spec had missed. That edge case might very well have made its way to production had I not done the due diligence to read and understand the code. Yes, AI did a lot of the legwork to shoot down that potential bug, but I knew where to aim it simply due to my own reading of the code.

There's a time and place for the blind hands-off approach. Recently in one of my personal projects, I needed to set up a complex runtime visualization script for diagnostics. The project isn't critical. The script uses matplotlib. I've never learned how to use that library, and frankly I don't really care to. In this scenario, I basically did "loop engineering": I designed the spec with Claude, let it rip wild and free, and validated the results without reading too much of the code, though I stayed very much involved in designing the architecture.

In the days of yore, there were "code monkeys". Today, we have "loop monkeys": engineers who mistake supervision for understanding. Monkeying around can be fun and productive; just be mindful not to let things go too bananas. 