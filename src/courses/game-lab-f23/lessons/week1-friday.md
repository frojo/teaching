---
id: "week1-friday"
title: "Week 1 (Friday) - Cameras, Sprites, Exporting"
---
# Week 1 (Friday) - Cameras, Sprites, Exporting

## First, some Unity tricks

### snap to vertex with 'v'

hold v while in the move tool, and you can drag a mesh by one of its vertices and snap it to vertices on another mesh

![Week%201%20(Friday)%20-%20Cameras,%20Sprites,%20Exporting%20c7c1098e51a749bfbe596fa942417b91/vsnap.gif](Week%201%20(Friday)%20-%20Cameras,%20Sprites,%20Exporting%20c7c1098e51a749bfbe596fa942417b91/vsnap.gif)

Sometimes this can let you snap something to a surface

### alt + left click drag

pivot the camera around whatever its current focus is

![Untitled](Week%201%20(Friday)%20-%20Cameras,%20Sprites,%20Exporting%20c7c1098e51a749bfbe596fa942417b91/Untitled.png)

Camera tips and tricks

### Any Unity questions so far?

## Materials

Materials are how you make the 3D objects in your scene have color and other texture!

### How to create a new material:

Left click in project view -> Create -> Material

(Note: a material is a type of *****asset*****)

### How to edit the material (e.g. the color):

Select your material in the Project panel and tweak things in the Inspector

### **How to apply the material:**

Drag the material onto the object

## Camera basics

[Camera Unity docs](https://docs.unity3d.com/Manual/class-Camera.html)

### Clear Flags

What do you want the background of your scene to be? Every frame, Unity draws the background, and then it draws everything in the scene on top of it.

**************Skybox:************** A “skybox” - for now just the default sky with grey underneath.

**Solid Color:** Choose a color as the background.

**********************Depth Only:********************** (don’t use this unless you know what you’re doing)

**************************Don’t Clear:************************** Don’t redraw the background every frame.

![Untitled](Week%201%20(Friday)%20-%20Cameras,%20Sprites,%20Exporting%20c7c1098e51a749bfbe596fa942417b91/Untitled%201.png)

### Projection

**********************Perspective********************** for a perspective point of view that we all know and love

********************Orthogonal******************** for no perspective (aka isometric)

![Untitled](Week%201%20(Friday)%20-%20Cameras,%20Sprites,%20Exporting%20c7c1098e51a749bfbe596fa942417b91/Untitled%202.png)

**Tip for positioning the camera: ctrl + shift + f**

move the currently selected object directly to the position of the scene view camera

![Week%201%20(Friday)%20-%20Cameras,%20Sprites,%20Exporting%20c7c1098e51a749bfbe596fa942417b91/ctrlshiftf.gif](Week%201%20(Friday)%20-%20Cameras,%20Sprites,%20Exporting%20c7c1098e51a749bfbe596fa942417b91/ctrlshiftf.gif)

Useful for if you want to position the game camera a certain way!

## Exporting/building and uploading to itch

***Building*** your game means making a file that you can play on other people’s computers *******without******* them needing to have Unity.

### How to build for web

This is how to make a file/folder that can be played in the browser

1. File -> Build Settings
2. Build Settings -> add Open Scenes
3. Platform ->WebGL
4. Build or Build and Run
5. Create a Folder outside your project.
6. Folder name ->select folder

### How to prepare your game for itch

[*itch.io](http://itch.io) needs web games to be zipped up before you upload them*

Right Click on your games folder (the one that contains the index.html file directly in it) and then click Send to -> Compressed (zipped) folder

Everything in the build folder needs to be included in the build.

### Uploading to itch

- Create an Itch.io Account
- Top right corner arrow -> upload new project
- Upload files -> select your zipped up folder
- Check “This file will be played in the browser”
- Embed options -> auto detect size.
- Set to public

Make sure to customize your itch page too!

## Package Manager

The Package Manager is a really powerful part of Unity that lets you download more functionality into Unity!

### How to open the Package Manager

Window → Package Manager

### How to download a new package

********************Important!******************** Select “Packages: My Assets” then select “Unity Registry”

- This will let you browse packages that are ***not*** in your project yet

## Sprite Renderer

First, make sure you have the 2D package installed.

In the Package Manager, find and click 2D, then click Install

**********This actually installs a bunch of 2d package**********

### How to create a sprite in your 3D space (with a Sprite Renderer)

***Note:** This is different than create a sprite gameobject for a 2d game*

1. Create an empty gameobject
2. Select the new gameobject
3. In the Inspector, click **Add Component**
4. Search for “Sprite Renderer” and add it

Congratulations, you just added your first Component!

**Key variables in this component are**

- Sprite: Takes a .png and renders that when on screen (you have to import the png into your project first)
- Color: Takes a color, tints the sprite that color
- Order in Layer: Tells unity which 2D image should be rendered on top

### Resources:

Sam’s slides for this lesson: https://docs.google.com/presentation/d/1XYFl9NJMcRVmxFo6tuXV5fVL7Bry9sXofxuylLr_1kc/edit#slide=id.g278e23bcd27_1_89 

Tricks taken from [Danny Hawk’s page](https://www.notion.so/Unity-Tips-That-Literally-Saved-My-Life-97d7af0e4d0a4d5b8b868503b9564f94?pvs=21)