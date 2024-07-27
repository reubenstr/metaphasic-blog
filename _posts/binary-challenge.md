---
title: "Binary Challenge"
excerpt: "A game to test binary conversion skill"
coverImage: "/assets/blog/binary-challenge/binary-challenge-cover.jpg"
date: "2021-01-01T00:00:00.000Z"
pinned: false
repoLink: "https://github.com/reubenstr/BinaryChallenge"
---

Binary Challenge is a game to test your skill of quickly converting decimal or hexadecimal to binary.

![binary challenge lcd display](/assets/blog/binary-challenge/binary-challenge-lcd-display.jpg)

The LCD display shows your score based on time to complete, number of challenges remaining, and a count down before showing the number to convert.

![binary challenge led segment displays](/assets/blog/binary-challenge/binary-challenge-led-segment-displays.jpg)

The 7-segment displays show the binary and hexadecimal representation of the binary as selected by the toggle swicthes after your conversion attempt.

![binary challenge toggles](/assets/blog/binary-challenge/binary-challenge-toggles.jpg)

The eight toggles are used to generate your conversion of the number into binary. Once you have your conversion complete the capture button locks it in and the game checks your input for correctness.

![binary challenge switch and jack](/assets/blog/binary-challenge/binary-challenge-switch-and-jack.jpg)

There is a power switch and a 2.1mm barrel jack connector for power.

![binary challenge cad render](/assets/blog/binary-challenge/binary-challenge-cad-render.png)

The enclosure, faceplate, and display bezels were created in Fusion360 and mocked for fit prior to 3D printing.

![binary challenge cad screenshot](/assets/blog/binary-challenge/binary-challenge-cad-screenshot.png)

The faceplate is laser cut from 3mm acrylic. The acrylic comes with paper masking and the laser etches away the lettering and other elements leaving those areas exposed. After a quick application of black spray paint and a 20 minute for the paint to dry, the paper masking is peeled away leaving a nice black and white faceplate.

![binary challenge back](/assets/blog/binary-challenge/binary-challenge-back.jpg)

The back plate is also 3mm white acrylic.

![binary challenge wiring](/assets/blog/binary-challenge/binary-challenge-wiring.jpg)

Wiring and soldering took a little bit of time, but nothing challenging.

![binary challenge microcontroller esp32](/assets/blog/binary-challenge/binary-challenge-microcontroller-esp32.jpg)

The microcontroller is an ESP32 choosen for the memory required for the display's splash screen and because they are inexpensive.
