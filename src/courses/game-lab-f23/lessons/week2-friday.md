---
id: "week2-friday"
title: "Week 2 (Friday) - 2D animations"
---
# Week 2 (Friday) - 2D animations

# Review: variables, types, moving an object with Update

# Conditionals

On Wednesday we created a sprite, then changed its x location by having the `transform.position` property increase. The sprite kept moving to the right and eventually moved off the screen. How do we get it back if the program keeps running?

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

What’s with the double equal sign? Due to the way software works, if you use a single equal sign, the program will immediately take anything to the right of the equal sign and place it in the variable on the left. And then since they are equal, the if statement will say, yes, it’s true and then always perform the actions in the following { } brackets. To get around this issue, when we are coding we use the double equal sign == which means *test if they are equal*.

```csharp
//NOTE THIS PROGRAM IS SHOWING A MISTAKE!
string myName = 'Pierre';

if (myName = 'Fran'){ //this line has a mistake! should be 
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

### Else Statement

Sometimes we need to be able to choose from several options. We use *else* and *else if* to create the options.

```csharp
int parkingTickets = 120;

if (parkingTickets < 50){
  Debug.Log("That's annoying, but you can pay that.");
} else if (parkingTickets < 80){
  Debug.Log("Better pay off that bill and try to save some money.");
} else {
  Debug.Log("That's so much money. Better wise up! You owe $"+parkingTickets);
}
```

*else* is the default. If nothing else is true in the if and else if statements then the else statement will be executed.

### Checking multiple things

Sometimes it’s not enough to test one thing. You can use and, or.

`&&` = AND

`||` = OR

example

```csharp
if ((myName == 'Fran') && (myAge < 60)){
  Debug.Log("that's probably him");
}
```

# Animator

### Let’s animate a sprite

Today, we’re going to use the Animator component in Unity to create a 2-frame animation in our game

### Preparing our animation frames

Whenever you’re going to animate something, it’s important to prepare the frames well. Today we’re going to just animate 2 frames, but these considerations are important in general.

First, create or find 2 frames for your animation.

![lakitu1.png](Week%202%20(Friday)%20-%202D%20animations%20c72c4141097b419eb2063a2c27adfed3/lakitu1.png)

![lakitu2.png](Week%202%20(Friday)%20-%202D%20animations%20c72c4141097b419eb2063a2c27adfed3/lakitu2.png)

I’ll be using these two to give lakitu a little blinking animation.

Importantly, make sure that your **frames are the same dimensions**. They should be the same width and height in pixels.

Also, note that these are .png files

### Import your images into Unity

Follow the same steps we did before with other 2D sprites

- Either drag the images into the Unity Project view or
- Go to Asset > Import new Asset… and select your images

Remember to change the ************************Texture Type************************ of these two assets to ************************************Sprite (2D and UI)************************************

### Create an animation

There are a few ways to create an animation. The easiest one (I think) is:

1. Select both of the sprites in the Project View (using shift-click)

![Untitled](Week%202%20(Friday)%20-%202D%20animations%20c72c4141097b419eb2063a2c27adfed3/Untitled.png)

1. Click and drag these images into the **********Scene view**********

This will automaticaly create a few things:

- A new Gameobject in the scene with **SpriteRenderer** and **Animator** component
- An Animation Controller asset
- An Animation Clip asset

### Animation Clip

This holds the actual animation - the two frames one after the other

### Animation Controller

This is an asset that can hold multiple Animation Clips, and controller how and when they are activated

## A note on walk cycles

You may want to animate a walk cycle. Great! The art of hand-animating a 2D walk cycle is out of the scope of this class. You can find all sorts of resources online that can help you. For example, [here’s an in-depth tutorial by angry animator](https://www.angryanimator.com/word/2010/11/26/tutorial-2-walk-cycle/)

However, keep in mind that due to their interactivity, **animating for a videogame is different from other non-interactive mediums.** We’ll get into this more when we learn about gamefeel. But you may already find that the same running cycle that would work for an animation won’t “feel right” in a videogame. Just something to keep in mind.

Often for videogames, minimalism in your animation is better! Sometimes, you only even need 2 frames. Take a look at how [some other games have animated walk cycles](https://www.spriters-resource.com/) for inspiration.

Some code from class:

```csharp
// libraries
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Move : MonoBehaviour
{
    // space to write code

    // declaring the age variable
    // int means it's a whole number (integer)
    public int age = 27;

    // primitive types:
    // int, float (decimal), string ("string" of text)
    // more complex types like Vector3

    string name = "Jiggly";

    // Vector3 is a complex type
    // which is why we use the new keyword
    // Vector3 has                   ( x,  y, z)
    Vector3 newPosition = new Vector3(20, 6, 0);

    public Vector3 positionChange = new Vector3(0.1f, 0, 0);

    // Start is called before the first frame update
    void Start()
    {
        // transform.position is the position of our Gameobject
        // Debug.Log("newPosition.x: " + newPosition.x);
        //Debug.Log("transform.position.x: " + transform.position.x);

        transform.position = newPosition;
        
    }

    // Update is called once per frame
    void Update()
    {
        // going to change the position by 0.1f in the x direction
        //                                  y and z are 0, so no change in y or z direction
       

        // these 2 lines do the same thing
        transform.position = transform.position + positionChange;
        //transform.position += positionChange;

        Debug.Log("transform.position.x: " + transform.position.x);
        
    }
}
```

How to move your character:

```csharp
// libraries
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Move : MonoBehaviour
{

    string favoriteFood = "plums";

    int favoriteNumber = 4;

    // Start is called before the first frame update
    void Start()
    {
				// asking question: is favorite food apples?
        // == means question
        if (favoriteFood == "apples") {

            // do some code here
            Debug.Log("our favorite food is apples!");

        } else { // aka otherwise

            // do something else
            Debug.Log("our favorite is NOT apples");

        }
   
        
    }

    // Update is called once per frame
    void Update()
    {
        // when the player is pressing the D key
        if (Input.GetKey("d")) {
            // do something
            Debug.Log("d key is being held down!");

            // move the player
            Vector3 positionChange = new Vector3(.01f, 0, 0);
            transform.position = transform.position + positionChange;

        }

    }
}
```

# For next week:

[Simple Animation | DUE 9/13](../Assignments%202311db1cc8994ec1ac0b90ebc6aa31e2/Simple%20Animation%20DUE%209%2013%2084e81ecc62ed4a2bb19bd3b24aff6c30.md)