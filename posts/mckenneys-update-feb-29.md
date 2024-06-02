---
section: "Experience"
title: "Update on McKenney's Experience"
date: 2024-02-29
meta: 
  title: "Update on McKenney's Experience"
  description: "Update on McKenney's experience"
---

It's been a while since I last posted to my blog. I've been head-deep in my position at McKenney's these last two months. 
Overall, the experience has been a little bit rocky, but nonetheless very educational and experiential. 

To address the "rocky part", I can't say I'm ever a big fan of training mandated by HR. I know it has its purpose, but 
it usually ends up being a boring experience having to sit and watch videos or take quizzes on HR-related things. In 
my case, I had to take a 10-hour online OSHA training course with non-skippable modules and mandatory quizzes and exams. 
Normally, I'm rather open-minded about new knowledge, but in the course of taking this online course, I couldn't help but 
feel that it was a real time sink, and I didn't learn anything relevant to my position. My position here is as a contract
software engineer, not a construction worker lol. Why do I need to learn about how to operate saws, cranes, and 
welding torches? Why do I need to learn about construction site safety when I do all my work remotely? Anyways, 
yeah, it is what it is.

Right now, I'm still head-deep in my original assignment which is to overhaul the full stack of the BuildingConnect app. 
I've managed to not only completely overhaul the UI, webpage flow, and React components, but I've also completely 
converted the codebase from JavaScript to TypeScript and rewritten a good portion of the Node.JS code. However, 
the project is now at a standstill because the effort to update the Keycloak instance from version 11 to 23 has been
deadlocked. In the jump from 11 to 23, the structure of Keycloak has changed drastically, and the old way of limiting a 
user's access to his/her own group(s) has changed to the point that the old way of creating this functionality is no 
longer applicable. As such, I'm having to learn to figure out a branch new way of implementing this functionality
alongside the newer version of Keycloak. 

Because of this major issue, I purchased a book titled 'Keycloak - Identity and Access Management for Modern 
Applications: Harness the power of Keycloak, OpenID Connect, and OAuth 2.0 to secure applications 2nd Edition'. 
I've been reading and working through this book in the hopes that the knowledge gained from this book will prove 
sufficient to fix this issue. I've been stuck currently in trying to fix the issue because I have zero prior 
experience in working in Keycloak or any similar service. Therefore, I've decided to start my learning from the ground 
up in lieu of attempting to piecemeal together my knowledge.

APRIL 2024 UPDATE: The issue described above regarding needing to find a way to port over the "group-based access" functionality 
alongside the Keycloak upgrade has been resolved. In the end, I opted to build an in-house solution to the problem.
Because attempting to port over the old way of doing things turned out to be a dead end, I decided to implement the
described logic in the Node.JS code itself. This way, the logic is more tightly integrated with the app and is more
flexible to changes in the future.