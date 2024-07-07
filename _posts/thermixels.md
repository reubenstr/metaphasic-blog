---
title: "Thermixels"
excerpt: "Pixels created from heat."
coverImage: "/assets/blog/thermixels/thermixels-cover.jpg"
date: "2024-04-01T00:00:00.000Z"
pinned: false
repoLink: "https://github.com/reubenstr/Thermixels"
---

Thermixels is a proof of concept that creates pixels from heat. 

![thermixels resistor grid add](/assets/blog/thermixels/thermixels-resistor-grid-add.jpg)

Each thermixel (the combination of words thermal and pixel) is made from a 365 ohm 1206 SMD resistor that generates enough heat to be detected by a thermal camera.

![thermixels leptop camera](/assets/blog/thermixels/thermixels-leptop-camera.jpg)

A Flir Lepton 3.5 thermal camera with 160x120 pixel resolution is used to capture images of the thermixel array.

![thermixels display](/assets/blog/thermixels/thermixels-display.jpg)

A LCD screen is used to view the thermal camera's images because the human eye is unable see the thermal signature created by the thermixel array. You may say this a fatal flaw to the practicality of using thermixels, but perhaps that's the advantage if the goal is to obfuscate a message in the open.

The firmware randomly changes the pattern of active thermixels every 10 seconds.

![thermixels resistor array pcb](/assets/blog/thermixels/thermixels-resistor-array-pcb.jpg)

Each of the 25 thermixels is controlled by a I2C port expander capable of providing the current required to power each resistor. The PCB is a four layer board due to the density of the SMD components.

![thermixels electronics](/assets/blog/thermixels/thermixels-electronics.jpg)

Due to the simple nature of the electronics they were hand wired and soldered. The microcontroller is a ESP32 selected mostly because I have many to spare. An STM32 Blue Pill would of been a good choice as well.

<hr/>

The original goal was to make a thermixel grid large enough to generate a QR code which would require 5 x 5 thermixel grid arrays for a total of 25 x 25 = 625 thermixels. The challenge is not the electronics, but really the thermal imaging as the Leptons low resolution of 160x120 would likely not be able to provide enough clarity of the QR code and higher resolutions cameras are outside a reasonable price range. Another challenge is creating sharper thermixels, as you can see from some of the images, the solder joints of the resistors create a cool spot which adds noise to thermally captured images. With that, a thermixel may need to be reimagined to something like a heater coil inside a plastic topped cylinder. Lastly, cooling became an issue when the proof of concept thermixel array was powered for a prolonged period of time. The delta between ambient and thermixel temperatures began to equalize thus reducing the thermal contrast of thermally captured images.


<!--- ![thermixels lepton capture](/assets/blog/thermixels/thermixels-lepton-capture.jpg) --->