---
id: "week2-wednesday"
title: "Week 2 (Wednesday) - Intro to scripting"
---
# Week 2 (Wednesday) - Intro to scripting

# Share homework

# Gameobjects, tranforms, components review

# 2D Sprites review

### How to create a sprite (with a Sprite Renderer)

1. Create an empty gameobject
2. Select the new gameobject
3. In the Inspector, click **Add Component**
4. Search for “Sprite Renderer” and add it

OR: Drag in your sprite from the scene view

# Intro. to scripting

What is a script? A script is just a component that we write ourselves. Every component in Unity is really a script under the hood.

## How to create a script

1. Select the gameobject you wish to add a script to
2. In the Inspector, click **Add Component**
3. Type out the *******************name of your script******************* (ex. Move)
4. Click ******************New Script******************
5. Confirm your scripts name by clicking ****************************Create and Add****************************

****Note on naming scripts:**** It can be very helpful to give your scripts good names. A good name is one that describes what the script does. Feel free to be as specific as possible!

## How to open a script

Two ways you can open a script:

1. Find it in your Project view and double click on it
2. In the inspector, double click on the greyed-out name of it

## Basic script layout

```csharp
// These are "libraries" (i.e. other pieces of code)
// that we need to import for our code
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// This is the name of our scrpit 
public class Move : MonoBehaviour
{
		// This is where we declare variables
    public int age = 10;
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
```

### Start() and Update()

Most scripts have a **Start()** and **Update()** function

**Start()** runs once at the onset of your program. Everything that we want to run once at the beginning of our game goes between the **{** and **}** curly brackets of our `Start()` function.

**Update()** function starts immediately after the code in `Start()` runs, and it happens in a loop. The entire `Update()` loop runs approximately 60 times a second, though this can vary as it’s dependent on your web browser speed and performance.

# Variables

Variables are symbolic containers. It is a symbol that contains a value that you want to change while your program is running. An example is age. I always have an age, but the value of age changes over time. Each year that I continue to *run*, the value of my age increases by 1. When I was born my age was 0. A year later on my birthday, 1 was added to my age. A year after that another 1 was added to my age. And so on.

![Untitled](Week%202%20(Wednesday)%20-%20Intro%20to%20scripting%200dd044467f76448886c7b3d875eeb1bf/Untitled.png)

### Declaring and initializing a variable

We can also create our own variables. There are two parts to create a variable: declaring and initializing.

Declaring is when you name a variable. You are telling the program *“I want a variable. I’m calling it age.”*

### types

In some languages, you have to specify what kind or ****type**** of variable you want depending on what you want it to hold, like a decimal, a word, a whole number, or something else. Here are some common types in C#:

**`int`** stands for “integer”. These are whole numbers.

**`float`** stands for “floating decimal point”. These are decimals

**`string`** stands for “a string of characters”. These pieces of text

### Initializing a variable

After you declare a variable you need to set it to some value. This is called initializing a variable.

```csharp
age = 22;
```

We can also set a variable equal to an equation, including with other variables.

```csharp
int myAge
int mySistersAge;

myAge = 54;
mySistersAge = myAge - 3;
```

### Initializing and Declaring together

You can initialize and declare a variable at the same time.

Example

```csharp
int myAge = 28;
```

### Public vs Private variables

The variables created directly in your class are called fields, and are our main way of exposing our code to the unity editor. Any fields marked `public` will be exposed to the unity editor, and their values are editable from there.

![Untitled](Week%202%20(Wednesday)%20-%20Intro%20to%20scripting%200dd044467f76448886c7b3d875eeb1bf/Untitled%201.png)

- Notes
    
    `public` and `private` are called [access modifiers](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)
    
    If you do not add an access modifier, its default is `private`
    

## Debugging using Debug.Log

When you get stuck while programming, you might be confused why your program is acting a certain way. Many times, it’s because your variable is not set to what you think it should be set to. We can use the print command to tell us the value of a variable. You can print text and/or the value of a variable. It will appear in the console.

example

```csharp
Debug.Log("age is " + age);
```

[https://giphy.com/embed/cFv3zac2OkvIak9gt7](https://giphy.com/embed/cFv3zac2OkvIak9gt7)

## Moving an object using Update()

### New type: **************Vector3**************

**Vector3** is like a container that holds 3 numbers

You know what else is something that has 3 numbers… your position in 3d space!

```csharp
Vector3 newPosition = new Vector3(10f, 10f, -5f);
```

For more *******complex******* type, we have to use the `new` keyword to initialize them

## transform

Your Gameobject’s position, rotation and scale are in `transform`

```csharp
transform.position = newPosition;
```

### Moving an object over time

We are used to reading from left to right.

But when you set the value of a variable you first take everything to the right of the equal sign and that value is placed in the variable.

```csharp
// Update is called once per frame
void Update()
{
    
	Vector3 positionChange = new Vector3(1f, 0f, 0f);
	
	transform.position = transform.position + positionChange;
}

```

The line `transform.position = transform.position + positionChange` may look strange but it’s perfectly valid. We start on the right side of the equal sign, so we are taking the current value of `transform.position` , whatever it is, and adding the `positionChange` to it. And since we’re doing this in the Update() function, this happens every frame and we get movement.

# Conditionals

In the above section we created a sprite, then changed its x location by having the `transform.position` property increase. The sprite kept moving to the right and eventually moved off the screen. How do we get it back if the program keeps running?

A conditional is a test. We can state it like this: *If this thing is true, then do this:*

### If statement

The way we do this in code is with an **IF statement**.

In `C#` it looks like this.

```csharp
string myName = 'Fran';

if (myName == 'Fran'){
  Debug.Log('Hi Fran');
}
```

The *if* tells the software to evaluate whatever follows that in the *( )* parenthesis. If what is in the parenthesis is true, then it will do the action within the following *{ }* brackets.

What’s with the double equal sign? Due to the way the software works, if you use a single equal sign, the program will immediately take anything to the right of the equal sign and place it in the variable on the left. And then since they are equal, the if statement will say, yes, it’s true and then always perform the actions in the following { } brackets. To get around this issue, when we are coding we use the double equal sign == which means *test if they are equal*.

```csharp
//NOTE THIS PROGRAM IS SHOWING A MISTAKE!
string myName = 'Pierre';

if (myName = 'Fran'){ //this line has a mistake! should be ==
  Debug.Log('Hi Fran'); //This will print out because of the mistake above!
}
```

Now that we know about conditionals, we can fix our moving sprite program from earlier. Now we will add a conditional statement. **If** the sprite goes off screen to the right, let’s have it appear again on the left side of the canvas. How do we do this? Let’s check where the ball’s x position is located.

```csharp
void Update()
{
    
	Vector3 positionChange = new Vector3(1f, 0f, 0f);
	
	transform.position = transform.position + positionChange;

  if (transform.position.x > 100){
    transform.positoin = new Vector(0, 0, 0);
  }
}
```

Final code for today’s lesson:

```csharp
// libraries: other code that is imported into our own code
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// the name of our script
public class Move : MonoBehaviour
{
    // all our script code goes here

    // variables

    // declaring the variable
    // hey i want a variable, and i'm going to call it age
    // int age;

    // initialize the variable
    // age = 25;

    int age = 25;

    string myName = "Kirby";

    // Vector3: holds 3 numbers
   
    // Vector3(x, y, z);

    // declared and initialized a certain position
    Vector3 myPosition = new Vector3(10, 5, 2);

    // the code in Start happens ONCE when the game starts
    void Start()
    {
        // transform.position is the position of the gameobject

        // change the position of Kirby to the new position
        //transform.position = myPosition;
    }

    // the code in Update is run again and again and again forever
    void Update()
    {
        // Vector3(x, y, z)
        Vector3 changeInPosition = new Vector3(.01f, 0, 0);

        transform.position = transform.position + changeInPosition;
      
    }

}
```

# For Friday:

Make a sprite that we will be animating!