---
section: "Experience"
title: "Update on McKenney's Experience"
date: 2024-02-29
meta: 
  title: "Update on McKenney's Experience"
  description: "Update on McKenney's experience"
---

It's been a while since I last posted to my blog. I've been head-deep in my co-op position at McKenney's these last two months. Overall, the experience has been a little bit rocky but nonetheless very educational and experiential. 

I'll go ahead and address some of the things I haven't cared for much in the experience. 

First off, I hate training mandated by HR. It seems to always be useless information that I'm having to ingest, and it tends to feel like a big waste of time. In my case, I had to take a 10-hour online OSHA training course with non-skippable modules and constant mandatory quizzes and exams. It was a real timesink and I learned nothing of relevance to my field. My position here is as a web development co-op. Why do I need to learn about how to operate saws, cranes, and welding torches? Why do I need to learn about construction site safety when I do all my work remotely? Anyways, yeah, that was a real stinkin' waste of time, but I've finished it so it is what it is. Luckily, I got paid by the hour while taking the training so there's that at least.

Secondly, there's been a lot of downtime where I'm waiting for the other developers to have time so that we can move forward with projects. I haven't goofed off during this downtime (well, besides maybe the occassional game or Youtube video). Instead, I've been using this time to refine my skills, which leads to what might be the main point of this blog post.

The project I was assigned at the beginning of the co-op is still ongoing. Basically, my original assignment was to overhaul the UI and webpage flow of the BuildingConnect app. I've managed to not only completely overhaul the UI, webpage flow, and React components, but I've also completely converted the codebase from JavaScript to TypeScript and rewritten a good portion of the Node.JS code. However, the project is now at a standstill because the effort to update the Keycloak instance from version 11 to 23 has been deadlocked. In the jump from 11 to 23, the structure of Keycloak has changed drastically, and the old way of limiting a user's access to his/her own group(s) has changed to the point that the old way of creating this functionality is no longer applicable. As such, we're scrambling to figure out how to implement this in the newer version of Keycloak, but to no avail. 

Because of this major issue, I purchased a book titled 'Keycloak - Identity and Access Management for Modern Applications: Harness the power of Keycloak, OpenID Connect, and OAuth 2.0 to secure applications 2nd Edition'. I've been reading and working through this book in the hopes that the knowledge gained from this book will prove sufficient to fix this issue. I've been stuck currently in trying to fix the issue because I have zero prior experience in working in Keycloak or any similiar service. Therefore, I've decided to start my learning from the ground up in lieu of attempting to piecemeal together my knowledge.

I'm hopeful that this experience will prove beneficial to my career. It's a great lesson in many ways. Firstly, I'm learning from the ground up how Keycloak works in order to solve a real-world use case. Secondly, it's a lesson on the kind of major issues that occur when a service is not updated on a consistent basis; in this case, the jump from Keycloak version 11 to 23 is massive, and much of the current headache could have been avoided had Keycloak been updated at every major release. And lastly, it's a lesson in what happens when companies don't invest in a properly sized team. Right now, the team is comprised of only three developers alongside myself and the other intern. It's clear that three main developers is not enough for what this team is having to do. Had their team been larger, they could have been more on top of maintaining the BuildingConnect app. Also, there would be more knowledge and shared learning within the team which would lead to being able to overcome the current matter in a more timely manner.