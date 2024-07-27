---
title: "4-bit Adder"
excerpt: "4-bit Adder"
coverImage: "/assets/blog/4-bit-adder/4-bit-adder-cover.jpg"
date: "2020-10-01T00:00:00.000Z"
pinned: false
repoLink: "https://github.com/reubenstr/4-BitAdder"
---

4-Bit Adder is an educational dashboard that allows interaction between user input and the illuminated graphics showing the descete logic required to make a 4-bit adder.

![4 bit adder front](/assets/blog/4-bit-adder/4-bit-adder-front.jpg)

The LEDs change state depending on the user input and indicate the logic state of inputs and outputs of descrete components.

![4 bit adder toggle switches](/assets/blog/4-bit-adder/4-bit-adder-toggle-switches.jpg)

Users input two 4-bit numbers using toggle switches under the INPUT section. The COMPUTATION section shows the binary math. And, the RESULT section shows the resulting value represented as binary.

![4 bit adder angle close up](/assets/blog/4-bit-adder/4-bit-adder-angle-close-up.jpg)

The 4-bit adder is the classic adder pattern using XORs, ANDs, and ORs.

![4 bit adder legend](/assets/blog/4-bit-adder/4-bit-adder-legend.jpg)

The Legend shows XOR, AND, and OR truth tables and a binary to decimal conversion as an aid to help teach descrete logic and conversions.

![4 bit adder back angle](/assets/blog/4-bit-adder/4-bit-adder-back-angle.jpg)

The back reveals a wiring mess!

![4 bit adder bracket wireing](/assets/blog/4-bit-adder/4-bit-adder-bracket-wireing.jpg)

The LEDs of each adder section are held in place using a 3D printed bracket. And each LED is connected to a port of a I2C PCA9685 PWM driver.

In retrospect, it would of been easier to design a PCB for each section that would contain the LEDs, resistors, and a PCA9685 driver versus soldering everything by hand.

![4 bit adder psu and arduino](/assets/blog/4-bit-adder/4-bit-adder-psu-and-arduino.jpg)

An Arduino Nano (Atmega328p) was used due to very low computational requirements of the project.






<!--
![4 bit adder back](/assets/blog/4-bit-adder/4-bit-adder-back.jpg)

![4 bit adder angle 2](/assets/blog/4-bit-adder/4-bit-adder-angle-2.jpg)

![4 bit adder context](/assets/blog/4-bit-adder/4-bit-adder-context.jpg)

![4 bit adder wiring](/assets/blog/4-bit-adder/4-bit-adder-wiring.jpg)

![4 bit adder bracket wireing](/assets/blog/4-bit-adder/4-bit-adder-bracket-wireing.jpg)

>