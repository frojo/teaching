---
id: "week1-wednesday"
title: "Week 1 (Wednesday) - Intro to Unity"
---
# Week 1 (Wednesday) - Intro to Unity

## Course Intro

## Intro to Unity

It’s time to download Unity! Follow the instructions here: (just for Unity)

[Before the First Class](../Before%20the%20First%20Class%20ac36a26e6aa84ba3b3e6113e43694287.md) 

### What is a game engine?

hosts the game and allows you to launch it

- lets you compile and build the game

defines the physics and inputs

- saves you from having to code/build systems yourself from scratch

graphics/render system

lets you edit the game with a graphic interface

### What do you know about Unity?

both web games and native apps

user-friendly

general purpose

[Pippin Barrs nothings in different game engines](https://www.pcgamer.com/heres-what-nothing-looks-like-in-18-different-game-engines/)

[Em Reed on Mass art game engines](https://www.youtube.com/watch?v=B0Kz2CtPqcs) ([transcript](https://emreed.net/GameArtEngines_Transcript))

[Unity military contract](https://kotaku.com/unity-new-contract-us-government-military-army-engine-1849403118)

## The Unity Editor

### Scene

The scene view is where you edit the placement of gameobjects in 2d or 3d space. The location of these objects, and all of the data on them, is saved into scene files. When you hit ctrl + s, this is the file that is being saved. Along the top toolbar there are buttons to mute audio, change between pivot options, change between local and global space, visualize a grid, toggle scene view rendering modes, and more

- Links
    
    Unity Docs: [The Scene view](https://www.notion.so/15603b66e5414048ab4d7f820d22e572?pvs=21)
    

![Untitled](Week%201%20(Wednesday)%20-%20Intro%20to%20Unity%2057f01d69dfcb4cbd8a970faa6804089b/Untitled.png)

### Game

This is where the game displays to when running, and where you can interact with it as it will appear to a player. On it’s toolbar there are options to change aspect ratios, mute game audio, display stats (like fps, and batches).

- Links
    
    Unity Docs: [The Game view](https://www.notion.so/15603b66e5414048ab4d7f820d22e572?pvs=21)
    

### Hierarchy

This the window that lists all of the GameObjects in your current scene. You create new GameObjects by right clicking on the hierarchy, or clicking the + button in the top left of the window.

- Links
    
    Unity Docs: [The Hierarchy window](https://docs.unity3d.com/Manual/Hierarchy.html)
    

![Untitled](Week%201%20(Wednesday)%20-%20Intro%20to%20Unity%2057f01d69dfcb4cbd8a970faa6804089b/Untitled%201.png)

### **Inspector**

This is where you edit all of the data, settings, and values on almost everything in unity, namely the gameobjects in your scene, and the files in your project folder.

- Notes
    
    The checkbox to the left of the name is how you set a gameobject active or inactive
    
- Links
    
    Unity Docs: [The Inspector window](https://www.notion.so/15603b66e5414048ab4d7f820d22e572?pvs=21)
    

![Untitled](Week%201%20(Wednesday)%20-%20Intro%20to%20Unity%2057f01d69dfcb4cbd8a970faa6804089b/Untitled%202.png)

### Project

Where you can access, arrange, create, and delete files from your your assets folder. The assets folder is the folder in your unity’s project directory where all your game’s files are stored. 

- Notes
    
    You can right click any file or folder here and “show in explorer” to locate its file on your computer.
    
    You can change from a two column layout to a one column layout by selecting the three dots in the top right of the project window
    
- Links
    
    Unity Docs: [The Project window](https://docs.unity3d.com/Manual/ProjectView.html)
    

![Untitled](Week%201%20(Wednesday)%20-%20Intro%20to%20Unity%2057f01d69dfcb4cbd8a970faa6804089b/Untitled%203.png)

### Console

Where messages, errors, and warnings are printed out by scripts. This includes scripts from you, from unity, and from plugins and packages.

- Notes
    
    The buttons in the top right toggle messages, warnings, and errors
    
    Double clicking an error brings you to the line of code that caused it
    
- Links
    
    Unity Docs: [The Console Window](https://docs.unity3d.com/Manual/Console.html)
    

![Untitled](Week%201%20(Wednesday)%20-%20Intro%20to%20Unity%2057f01d69dfcb4cbd8a970faa6804089b/Untitled%204.png)

## GameObjects, Transforms, Components, oh my!

The fundamental truths of Unity:

<aside>
💡 **A game is made up of GameObjects.

GameObjects all have a Transform.

GameObjects are collections of Components.**

</aside>

The more you think about how everything relates to this fundamental architecture, the easier it will be to become adept at using Unity as a tool.

(by the way, this is how a lot of game engines work; if you were to build your own, chances are it would have a pattern like this)

### GameObjects

These are the building blocks you make your games in unity out of, everything that you put in your game is a gameobject, with no exceptions.

You can think of gameobjects as *points in 3d space* that we add *information and behaviors* to.

- Links
    
    Unity Docs: [GameObjects](https://docs.unity3d.com/Manual/GameObjects.html)
    

### Transforms

Those “points in 3d space” are kept track of with what’s called a Transform. A transform keeps track of a gameobject’s position, rotation, and scale. **GameObjects all have a Transform**, it’s required by unity. When you make a gameobject it will automatically have a transform and you cannot remove it. 

- Links
    
    Unity Docs: [Transforms](https://docs.unity3d.com/Manual/class-Transform.html)
    

### Components

The “information and behaviors” are added to gameobjects via Components. Unity has created many components that you can add to a gameobject to do some kind of functionality (like play a sound, fall with physics, collide with other colliders, render a 3d model, shine light onto your scene, and more). When can even make our own components by writing code in scripts and then attaching them to a gameobject.

- Links
    
    Unity Docs: [Components](https://docs.unity3d.com/Manual/Components.html)
    
    Unity Docs: [Using Components](https://docs.unity3d.com/Manual/UsingComponents.html)
    

![An example GameObject “soccerball”, as viewed by the inspector](Week%201%20(Wednesday)%20-%20Intro%20to%20Unity%2057f01d69dfcb4cbd8a970faa6804089b/Untitled%205.png)

An example GameObject “soccerball”, as viewed by the inspector

## Lab/Homework

### Research:

[Pippin Barrs nothings in different game engines](https://www.pcgamer.com/heres-what-nothing-looks-like-in-18-different-game-engines/)

[Em Reed on Mass art game engines](https://www.youtube.com/watch?v=B0Kz2CtPqcs) ([transcript](https://emreed.net/GameArtEngines_Transcript))

[Unity military contract](https://kotaku.com/unity-new-contract-us-government-military-army-engine-1849403118)

### Practice:

[Modeling a Space | DUE 9/06](../Assignments%202311db1cc8994ec1ac0b90ebc6aa31e2/Modeling%20a%20Space%20DUE%209%2006%2053ebae22340047c3b5d3e021e71da5d5.md) 

## Resources

[Unity Documentation](https://docs.unity3d.com/Manual/)

**********************************************Danny Hawk’s Unity Reference docs:**********************************************

[Unity Intro Reference](https://www.notion.so/Unity-Intro-Reference-Doc-2894afd4fed047f9962a9b938b1dd686?pvs=21)

[Unity Tips That Literally Saved My Life](https://www.notion.so/Unity-Tips-That-Literally-Saved-My-Life-97d7af0e4d0a4d5b8b868503b9564f94?pvs=21)

## Credits

A lot of content on this page has been lovingly stolen from the inimitable Danny Hawk’s [Unity Intro Reference](https://www.notion.so/Unity-Intro-Reference-Doc-2894afd4fed047f9962a9b938b1dd686?pvs=21)