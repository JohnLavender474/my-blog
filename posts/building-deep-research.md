---
section: "Experience"
title: "Building a Deep Research Application"
date: 2026-03-02
meta:
  title: "Building a Deep Research Application"
  description: "How I built a custom Deep Research app using a LangGraph agent workflow, what I learned about prompt engineering, and what happened when I tested it on my wife's PhD research."
---

Recently at Callibrity, employees were offered a bonus to give an hour-long presentation on any AI-related topic that could benefit the team. Naturally, I had to accept — partly for the bonus (who can say no to that?), but mostly for the chance to learn new things and share new findings with the team.

I chose to build a fully custom Deep Research application and present on it.

So what is Deep Research? Rather than asking an AI a question and getting a single response with the reasoning, inner workings, and sources hidden from the user, Deep Research breaks a question into smaller sub-questions, searches across a set of curated source documents to find relevant passages for each, and then synthesizes a final answer with the entire process visible to the user. 

If you go to for instance ChatGPT in the web, you will see that OpenAI has a "Deep Research" implementation which you can leverage.

The application I built uses a graph-based agent workflow built in Lang Graph, where each step — decomposing the question, retrieving relevant passages through vector search, deciding what to do next — is managed as a node in a stateful graph. This architecture is what facilitates a systematic approach to answering the user's question to a degree of depth that is not possible with a simple direct response.

In the creation of the application, one of the biggest lessons I learned is that building agent workflows demands not only keen engineering skills but also a strong set of writing skills. The behavior of the system was highly sensitive to the natural language in the system prompts. Subtle phrasing choices could skew results in ways that weren't immediately obvious, and getting the prompts right sometimes required the same kind of precision you'd bring to writing for example a legal contract.

To test out the application, I used my wife as a test subject since she is a skilled researcher and PhD candidate (studying gender-based violence in Bangladesh from a sociological perspective). I uploaded the source documents from a paper she's been writing, and we sat down together to ask the application research questions based on those documents. This was more than just a contrived demo; it was a chance to put my silent hard work to practice in a real-world situation. We watched as the system decomposed our questions into sub-tasks, identified relevant passages across multiple documents, and synthesized answers that were not only accurate but drew connections across sources in ways that would have taken her a much longer amount of time to do herself. She was impressed, and she's not an easy audience when it comes to research rigor! That moment was the real validation. Not the technical architecture, not the presentation, but watching someone with deep domain expertise confirm that the tool was doing meaningful work.

Thanks to Callibrity for creating the space and the incentive to explore this subject!

See the project here on Github: https://lnkd.in/eXqn7cHP