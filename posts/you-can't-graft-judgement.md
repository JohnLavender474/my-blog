---
section: "Experience"
title: "You Can't Graft Judgement"
date: 2026-06-07
meta: 
  title: "You Can't Graft Judgement"
  description: "Blog Post - You Can't Graft Judgement"
---

Recently, a company leader made a post on LinkedIn citing the MIT study "The GenAI Divide: State of AI in Business 2025" which found that 95% of enterprise AI pilots produced "no measurable P&L impact" despite $30-40 billion in investment. The study's executive summary concludes that the failure "does not seem to be driven by model quality or regulation, but seems to be determined by approach" (MIT NANDA, 2025).

The takeaway in their post? It was unambiguous: "The bottleneck was never the AI. It was the layer above it." In other words, instead of AI, the "organizational layer" (the layer comprised of people) is to blame. Conveniently, their product claims to fix this issue by building "the layer that captures what their frontier developers learn — and grafts it across everyone else." In other words: capture what makes a good developer good and commoditize it across the org. In theory, this sounds compelling. In practice, I think the post's framing misunderstands how expertise actually works.

Before saying anything else, I should be upfront: I have just a few years of experience in software. I don't have all the answers. I'll also acknowledge the obvious conflict of interest: I can't say I'm indifferent to attempts to commoditize developer expertise. But as someone who works intimately with AI tools daily, for planning, building, testing, and reviewing solutions, I think this reading of the study is too clean. Hear me out.

Firstly, let's address the MIT report, because it's more nuanced than the post suggests. While the executive summary concludes the failure "does not seem to be driven by model quality," the same report ranks "model output quality concerns" as one of the highest barriers to scaling enterprise AI, with users citing "breaks in edge cases and doesn't adapt" and "too much manual context required each time" as top reasons for abandoning these tools in critical workflows (MIT NANDA, 2025). The models aren't exonerated; they're just an equally shared constraint.

Secondly, there's something fundamental to be said about knowledge itself, and the limits of trying to package and distribute it. These two problems are not unrelated: the same probabilistic, context-dependent nature of current models that makes output quality unpredictable is precisely what makes any captured workflow degrade the moment the context shifts.

Philosopher Michael Polanyi identified in 1966 that the most valuable knowledge resists formalization by nature: "We can know more than we can tell" (The Tacit Dimension, 1966). Lave and Wenger's research on situated learning sharpens this further: "The way to maximize learning is to perform, not to talk about it" (Situated Learning, 1991). Prompt chains, skill files, and workflow documentation are, by definition, talking about it. They are the written residue of someone else's performance, not the performance itself.

To be clear: these artifacts have real value. A well-written system prompt, instruction, or skill file can meaningfully accelerate a developer's workflow. The fallacy isn't in creating them. It's in treating them as static deliverables rather than living documents. Requirements change. Codebases evolve. Models behave differently across contexts and even across sessions. The judgment required to know when an instruction is outdated, when it's being misapplied, or when the model is confidently following instructions off a cliff: that judgment belongs to the developer, not the documentation.

Some will point to agentic AI systems with persistent memory and feedback loops as the answer to this. But consider what those actually require to work. Human-in-the-loop feedback, where a developer reviews and corrects model outputs to inform future behavior, only works as well as the situated judgment of the human maintaining it. That judgment still has to be earned through experience; the loop just makes it more visible. Automated feedback loops, where models evaluate and correct each other, have their own well-documented failure mode: errors compound undetected until it's too late, because the current technology has no reliable mechanism for catching (1) what it doesn't know and (2) what it doesn't know that it doesn't know.

Either way, the human's tacit judgment remains the load-bearing element. And that can be developed only through the kind of repeated, situated experience that the current technology cannot replicate and no organizational layer can shortcut. The developers who work best with AI tools aren't the ones who have the best prompt chains; they're the ones who have developed a hard-won, experience-based judgment that evolves with every new context they encounter. They know when something feels off before they can articulate why.