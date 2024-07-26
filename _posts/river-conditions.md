---
title: "River Conditions"
excerpt: "James River water conditions dashboard"
coverImage: "/assets/blog/river-conditions/river-conditions-cover.jpg"
date: "2020-07-05T00:00:00.000Z"
pinned: false
repoLink: https://github.com/reubenstr/RiverConditions
---

James River Conditions shows the latest water status from USGS and WaterReporter.org


<!-- ![river conditions context](/assets/blog/river-conditions/river-conditions-context.jpg) -->

![river conditions front](/assets/blog/river-conditions/river-conditions-front.jpg)

The river map is of the entire James River basin and shows all waterways named as rivers.

![river conditions drainage basin](/assets/blog/river-conditions/river-conditions-drainage-basin.jpg)

This is the drainage basin map used to trace the rivers into a format that is usable by a laser engraver.

![river conditions map close up](/assets/blog/river-conditions/river-conditions-map-close-up.jpg)

Each LED indicates either a [USGS streamgage](https://dashboard.waterdata.usgs.gov/app/nwd/en/) or a [Water Reporter Org](https://www.waterreporter.org/) testing site. Streamgages provide river height and water flow by using sensors that automatically report data. Water Reporter Org is a network of human volunteers testing and reporting bacterial levels at designated testing sites.

![river conditions river mouth](/assets/blog/river-conditions/river-conditions-river-mouth.jpg)

There are many streamgage and water quality testing sites so only a few are added to the map.

![river conditions legend](/assets/blog/river-conditions/river-conditions-legend.jpg)

As you see green indicates recent water tests find the bacteria levels to be acceptable for human interaction, while yellow indicates elevated bacteria levels, and red indicates the water is not safe for human recreation. 

Blue indicates the selected testing site shown on the display.

![river conditions lcd and controls](/assets/blog/river-conditions/river-conditions-lcd-and-controls.jpg)

The display provides testing site data and the control buttons moves the selected testing site up or down the river.

![river conditions back](/assets/blog/river-conditions/river-conditions-back.jpg)

The back of the dashboard reveals the electronics.

![river conditions electronics](/assets/blog/river-conditions/river-conditions-electronics.jpg)

Due to the prototype nature of this project, everything was hand soldered to keep it simple.

![river conditions esp32](/assets/blog/river-conditions/river-conditions-esp32.jpg)

The MCU (microcontroller) is an ESP32 used for it's CPU speeds, large RAM, and built in WiFi.

The ESP32 uses REST to reach out to a custom endpoint hosted on my blog's domain that in turn reaches out to the USGS and waterreporter.org endpoints and caches the data. The reason for this chain of events is due to unoptimized waterreporter.org APIs that are sized in multiple megabytes and the ESP32 can not handle downloading and decoding that much JSON data. (See the design files linked below for the PHP script used.)

![river conditions map bezel clip](/assets/blog/river-conditions/river-conditions-map-bezel-clip.jpg)

This shows how the river map is a separate piece from the main front plate which was designed this way so the river map is replacable in case of mistakes.

![river conditions sd card bracket](/assets/blog/river-conditions/river-conditions-sd-card-bracket.jpg)

This is the micro SD card reader module bracket.

The SD card contains WiFi credentials for quick AP changes. Also, testing locations are stored in a JSON config file so if a testing site becomes defunct or a new one is added, instead of compiling new firmware only the locations file on the SD card needs updated.

![river conditions dc dc power](/assets/blog/river-conditions/river-conditions-dc-dc-power.jpg)

This little DC-DC converts the 12vDC input into 5vDC and provides enough power for the LEDs, display, and ESP32 without worry.



