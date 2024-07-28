---
title: "Zuko"
excerpt: "A quadruped robot dog!"
coverImage: "/assets/blog/zuko/zuko-cover.png"
date: "2022-10-01T00:00:00.000Z"
pinned: true
repoLink: "https://github.com/reubenstr/zuko"
---

Zuko is a quadruped robot dog inspired by such dogs like Spot Mini Mini and Baris Alp's Kangel.

Although Zuko is an incomplete project, I wanted to share him hopefully inspiring others to explore making their own robot dogs.


![zuko robot dog motion test](/assets/blog/zuko/videos/zuko-v2.1-first-time-standing-kinematics-test.mp4)

This is a video of the found of kinematics tests - a good start!

![zuko v2](/assets/blog/zuko/zuko-v2.1-printed-parts-exploded.jpg)

Every printed part was designed using Fushion 360 with the goal of minimizing frame size, part count, and keeping a sense of aesthetics all while keeping the parts simple to print. All the parts are printed in ABS but in retrospect I would of tried PETG for easier printing and better dimensional stability.

Total assembled weight (frame, motors, electronics, and batteries) is about 2.2kg.

![zuko mini australian shepard](/assets/blog/zuko/zuko-mini-australian-shepard.jpg)

This is Zuko, a Australian shepherd. Over the Covid 19 pandemic my girlfriend wanted a puppy and found a beautiful black tri Australian Shepherd. While picking her up Zuko also available was a spunky brown tri (Zuko) and I thought this was my chance to also have my own puppy - I was summarily denied by girlfriend. She made a strong case that Australian Shepherds need large amounts of attention and activity but I being a typical engineer tend to fall into projects with the rest of world going unnoticed. I reluctantly agree and went with the best second option, building my own puppy!

![zuko v2](/assets/blog/zuko/zuko-v2.1-robot-dog-legs-assembled.jpg)

Here are the legs all assembled and ready to go. Since this picture I swapped out the TPU feet with black EVA foam for one less filament type and better grip.

![zuko robot dog upper leg drive system cross section](/assets/blog/zuko/zuko-robot-dog-upper-leg-drive-system-cross-section.png)

Leg motor cross section. The cross section tool in Fushion 360 as invaluable for testing against hardware collisions and ensuring enough material exists for structural rigidity.

![zuko v2](/assets/blog/zuko/zuko-v2.2-cad-render-side-cross-section.png)

Body cross section.

![zuko v2](/assets/blog/zuko/zuko-v2.1-center-frame-assembled.jpg)

The center frame assembled and ready for the hip assemblies.

![zuko robot dog kinematic-diagram](/assets/blog/zuko/linked-leg-kinematic-diagram.png)

Here is the kinematics diagram of the linked leg locomotion system. With the positions of the servos and lengths of the segments known, using basic trigonometry the inverse kinematics can be resolved. Meaning, knowing where you want the foot to be located in terms of X Y coordinates the required angles of the two steppers can be calculated.

![zuko v2](/assets/blog/zuko/forward-kinematics-simulation-result.png)

Using Python the forward and inverse kinematics calculations were validated.

![zuko v2](/assets/blog/zuko/expansion-board-prototype-render.png)

A custom expansion board was created using KiCad that connected directly to the Raspberry Pi which was used for driving the 12 RC servos and provided ADC/GPIOs for future functionality.

<hr />

The control software uses ROS 2 which at the time was a relatively new release and not as adopted. Therefore, some challenges were faced such as updating the PS4 controller driver and general lack of community discussion. 

The link at the end of this power contains all the kinematics simulation code, ROS 2 modules source code, PCBs design files, assembly pictures, and more.

![zuko robot dog motion test](/assets/blog/zuko/videos/zuko-v2.1-defending-himself-against-sydney.mp4)

Here is Syndey and Zuko meeting each other for the first time.

<hr />

Being an incomplete project I don't have much more pictures to show, hopefully I will swing back to this project in the future.