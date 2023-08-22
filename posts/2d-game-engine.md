---
title: "Separation of Concerns: Creating Reusable Game Engine"
date: 2023-08-02
meta: 
  title: "Creating Game Engine"
  description: "Blog Post - Creating Game Engine"
---

# Introduction
Welcome to this blog post where I'll be sharing my journey of refactoring and improving my game engine, "Megaman Maverick." Over the past year, I've embarked on a mission to separate the game engine from the game itself, transitioning from Java to Kotlin. In this post, I'll delve into the reasons behind this decision, the process of porting code to Kotlin, and the benefits of this endeavor.

# Background and Initial Design
My project, Megaman Maverick, began as an ambitious endeavor to create both a game and a game engine from scratch. Built upon the Entity-Component-System (ECS) architecture, this project combined entities, components, and systems to create a cohesive whole. The initial design aimed to streamline development and create a functional game engine tailored to the project's needs.

# Reasons for Refactoring
After almost a year away from the project, I revisited it with fresh eyes and a new perspective. It became evident that the game engine and the game itself were too tightly intertwined, hindering code maintainability and reusability. This realization led me to consider the benefits of transitioning from Java to Kotlin—a language I had grown more confident in, thanks to my experiences at Ware2Go.

# Transitioning to Kotlin
The transition from Java to Kotlin was not without its challenges, but Kotlin's concise syntax and modern features proved invaluable. The process involved rewriting existing code in Kotlin while ensuring seamless integration with the rest of the codebase. Null safety, extension functions, and other Kotlin features made the migration smoother and improved the overall readability of the code.

# Separation of Concerns
The principle of separation of concerns became a driving force behind this refactoring effort. By separating the game engine from the game logic, I aimed to create a more modular and reusable codebase. This design choice also aligns with best practices in software development, making the codebase easier to understand, maintain, and extend in the future.

# ECS Architecture in Kotlin
One of the core components of the project, the Entity-Component-System architecture, underwent adaptation to Kotlin. Components, systems, and entities were all refactored to leverage Kotlin's expressive capabilities. Below is a snippet illustrating how a component looks in the refactored engine:

kotlin

// Code snippet for a Component in Kotlin
```
class TransformComponent(var position: Vector2, var rotation: Float)
```

# Testing and Validation
Ensuring the reliability of the refactored game engine was paramount. Rigorous testing, including unit tests for components and systems, helped identify and rectify any regressions or issues. This step played a crucial role in maintaining the engine's integrity and functionality.

# Showcasing New Features
During the refactoring process, I took the opportunity to implement new features and enhancements to the engine. These additions not only improved performance but also added versatility to the engine's capabilities. Below is a screenshot showcasing one of the new features in action:

Screenshot of New Feature

# Future Plans
Looking ahead, the possibilities are exciting. With the refactored game engine in place, I'm poised to create a new mobile game that showcases the engine's potential. Additionally, I plan to continue refining the engine, expanding its capabilities, and potentially making it open source for others to benefit from.

# Lessons Learned
This journey has taught me the value of revisiting and improving existing projects. Embracing new technologies and design principles has a profound impact on code quality and maintainability. The transition from Java to Kotlin underscores the importance of adaptability and continuous learning in the dynamic field of software development.

# Conclusion
In conclusion, the process of refactoring my game engine from Java to Kotlin has been both challenging and immensely rewarding. The separation of concerns principle and the adoption of Kotlin have set the stage for a more modular, maintainable, and extensible game engine. As I move forward with creating new projects and refining the engine, I'm excited to see the potential unfold.

# Closing Thoughts
Thank you for joining me on this journey of transformation and growth. I'm eager to hear your thoughts, questions, and experiences related to game engine development, Kotlin, and the path of refactoring. Feel free to reach out to me via Twitter or Email.