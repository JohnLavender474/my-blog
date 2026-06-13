---
section: "Thoughts & Opinions"
title: "When LLMs Have to Build What Humans Just Know"
date: 2026-06-13
meta: 
  title: "When LLMs Have to Build What Humans Just Know"
  description: "Blog Post - When LLMs Have to Build What Humans Just Know"
---

I came across a blog post by Simon Willison titled [
Claude Fable is relentlessly proactive](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/) about a web-page CSS debugging session with Claude Fable. It's quite a fascinating read, really.

One thing I've noted in using models like Opus and Fable is that they often have a keen ability to stitch together the pieces and cut through the noise — finding the patterns, the architecture, and all the branching avenues for resolving a bug or implementing a feature. I'm almost always consulting with the model before moving forward with a plan.

That being said, I'm sometimes surprised, fascinated, or downright boggled by the lengths to which a model will go, steps that, at least from a certain perspective, seem absolutely over the top. So many of the steps Fable followed as recounted in Willison's post are fascinating, but would be largely unnecessary if a human were doing the task. Granted, the bug in question — a browser-specific scrollbar quirk that only showed up in Safari — isn't one a developer could just "see" by reading the CSS; even Willison didn't know the fix, which is presumably why he handed it off. But a human would have reached the answer by opening the browser and glancing at the thing in dev tools. The LLM, lacking the ability to simply look, had to construct an entire apparatus to substitute for that glance: spinning up an ad hoc plethora of tools and scripts just to approximate what a developer gets for free by having eyes.

I can say the same of my own experience having tried to use Claude to help with 2D game-level design. I spent hours building workflow instructions, skills, edge-case notes, and context all to assist the model, and in the end, what I often got was something that failed to live up to the claims that Claude would make as it iteratively built the levels. That same missing intuition shows up here too: spatial reasoning for a game level (specifically a fun and enjoyable one) is something a human designer holds in their head, and the models (at least the current ones) have to fumble their way toward it.

A lot of time and tokens are burned for a model to build that approximation of a "visual" or "world" model. Is it worth it? Technically, absolutely! Seeing the steps Fable followed in Willison's case for debugging, and also the steps that Claude would go through in my own level-design experience to approximate its ideas from text into visual design, at the very least offer a lot of learning opportunity and interesting considerations to unpack. From a practical standpoint though in regard to time and financials? Well, that's debatable.

Willison does gesture at the cost — he notes the session would have run him around $12 and jokes that Fable will happily burn that much inventing new ways to debug your CSS. But he never quite sits with the question I want to broach: not *can* the model do all this, but *should* it have to? The whole elaborate apparatus exists to work around a gap that a pair of eyes closes instantly. Could someone build a proper harness or workflow to close this gap further? Or is it an insurmountable limitation of the technology? 