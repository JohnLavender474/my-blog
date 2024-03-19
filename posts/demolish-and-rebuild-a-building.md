---
section: "Experience"
title: "Demolish and Rebuild: BuildingConnect App at McKenney's"
date: 2024-03-19
meta:
  title: "Demolish and Rebuild: BuildingConnect App at McKenney's"
  description: "Blog Post - Demolish and Rebuild: BuildingConnect App at McKenney's"
---

McKenney's

During my stint as a contract Software Developer at McKenney's Inc., my first assignment was to overhaul their
customer-facing BuildingConnect app. This app was built on the following tech stack: Keycloak, Node.js, React.js,
Express.js, and JavaScript.

When I first started this assignment, the very first thing I did was to run the app without any changes so that I
could understand (1) what the purpose of the app is, (2) how things are done, (3) what the problems are, and (4)
what course of action can I take to improve on what's already here. Although I don't want to be mean to the developer
who built the app, there's no denying the fact that the app was an ugly, buggy, inefficient, and insecure mess. The UI
was awful, there were numerous bugs in the app (like buttons not fulfilling their intended action reliably), there
were numerous sections with horribly inefficient code (like requests being resent needlessly in the same code block
or a needless nested for loop), and worst of all, sensitive data being exposed in the console and network tabs in
the browser. On top of all this, there's also the fact that the team wanted the Keycloak version to be upgraded from
version 11 to 23, which entailed numerous API changes and major changes to the way policies and permissions work.

This was all in all a major task before me. So much needed to be scrapped, I set out to rebuild the app from the ground
up. I modernized the UI, fixed all the apparent bugs, and completely changed a lot of the logic to meet the requirements
of changing to Keycloak 23. On top of that, I fully transitioned the code from JavaScript to TypeScript to make the
code cleaner and more well organized.

Sorry, there's not much more to the story here. The story of overhauling this app is not exactly an action-packed story,
but nonetheless I'm proud of what I accomplished. Below are screenshots of the completed work.

![images/mckenneys/buildingconnect](/images/mckenneys/buildingconnect/1.png)

![images/mckenneys/buildingconnect](/images/mckenneys/buildingconnect/2.png)

![images/mckenneys/buildingconnect](/images/mckenneys/buildingconnect/3.png)

![images/mckenneys/buildingconnect](/images/mckenneys/buildingconnect/4.png)

![images/mckenneys/buildingconnect](/images/mckenneys/buildingconnect/5.png)

![images/mckenneys/buildingconnect](/images/mckenneys/buildingconnect/6.png)
