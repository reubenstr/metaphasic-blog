---
title: "Coil Winder"
excerpt: "Winding machine to make electric instrument pickups."
coverImage: "/assets/blog/coil-winder/coil-winder-cover.jpg"
date: "2021-03-01T00:00:00.000Z"
pinned: false
repoLink: "https://github.com/reubenstr/CoilWinder"
---

This is a automatic coil winder to make coils for electric instruments and was built primary to build single coils for the [Melodic Chimes](/posts/melodic-chimes) project.

![coil winder pickup winding](/assets/blog/coil-winder/coil-winder-pickup-winding.jpg)

This image shows the start of a single coil (black bobin). The oblong part on the bottom of the rigging contains neodymium magnets for the hall effect RPM sensor.

![coil winder motors](/assets/blog/coil-winder/coil-winder-motors.jpg)

The winding motor is a 1000RPM gear head DC motor. In retrospect, a 3-phase brushless motor (BLDC) should of been used since the motor controller can set precisely speed and the BLDC motors operate with greatly reduced vibration and noise.

![coil winder indexer](/assets/blog/coil-winder/coil-winder-indexer.jpg)

The indexer rides up and down as the coil winds to help create tightly packed and event windings.

![coil winder lcd](/assets/blog/coil-winder/coil-winder-lcd.jpg)

Using the control panel the user can set the motor RPM, number of revolutions, the indexer start and stop heights, and more.

![coil winder control wiring](/assets/blog/coil-winder/coil-winder-control-wiring.jpg)

The control panel wiring is straigh forward and the LCD connection is made simple by using a I2C adapter interface.

![coil winder pcb unpopulated](/assets/blog/coil-winder/coil-winder-pcb-unpopulated.jpg)

A quick board was spun up using [DipTrace](https://diptrace.com/).

![coil winder electronics pcb](/assets/blog/coil-winder/coil-winder-electronics-pcb.jpg)

The microcontroller is a Arduino Nano.

![coil winder electronics](/assets/blog/coil-winder/coil-winder-electronics.jpg)

Under the control panel the PCB is secured.

![coil winder bench test](/assets/blog/coil-winder/coil-winder-bench-test.jpg)

Prototyping occured using a breadboard and custom button/LED breakout board.

The project was success and I was able to easily wind the pickups required for the [Melodic Chimes](/posts/melodic-chimes) project.