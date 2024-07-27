---
title: "Quote Bot"
excerpt: "Desktop stock quote bot."
coverImage: "/assets/blog/quote-bot/quote-bot-cover.jpg"
date: "2021-04-01T00:00:00.000Z"
pinned: false
repoLink: "https://github.com/reubenstr/QuoteBot"
---

Quote box shows live stock quote from a custom list of ticker symbols.

![quote box lcd front](/assets/blog/quote-bot/quote-box-lcd-front.jpg)

The display shows the stock symbol, first part of the company name, the current price, dollar and percent change, a line with an indicator to convey the current price relative to the 52 week range.

The display is also a touch screen that you can press to cycle to the previous or next stocks on the custom stock symbol list.

The bottom line shows status for the SD card, WiFi connection, API, fetch status, and time.

![quote box base no power](/assets/blog/quote-bot/quote-box-base-no-power.jpg)

The power switch is the toggle switch located on the bottom plate.

![quote box base with power](/assets/blog/quote-bot/quote-box-base-with-power.jpg)

Beneath the bottom plate a LED matrix shines through and provides a color pattern to indicate the price movement in terms of up or down for the day.

![quote box esp32 usb plug](/assets/blog/quote-bot/quote-box-esp32-usb-plug.jpg)

Underneath the display is the SD card and USB programming port. The SD card contains WiFi credentials, API credentials, and a list of ticker symbols to fetch.

![quote box underside power and led matrix](/assets/blog/quote-bot/quote-box-underside-power-and-led-matrix.jpg)

Inside the bottom section contains the LED matrix and DC-DC power supply to convert the 12vDC input power to 5vFC for the electronics.

![quote box electronics](/assets/blog/quote-bot/quote-box-electronics.jpg)

Removing the top reveals the LCD display and ESP32. The ESP32 is a WiFi enabled microcontroller that fetches live stock data from the IEXCLOUD API.

![quote box connecting lcd box](/assets/blog/quote-bot/quote-box-connecting-lcd-box.jpg)

The top is easily removed and shows the cable from the bottom that supplies the power and connections the data line from the ESP32 to the LED matrix.

![quote box schematic](/assets/blog/quote-bot/quote-box-schematic.png)

The schematics are straight forward.

![quote bot stl models](/assets/blog/quote-bot/quote-bot-stl-models.jpg)

This is going to sound crazy, but the parts were designed in Tinker CAD while I sorting out a CAD license issue.

![quote box bottom](/assets/blog/quote-bot/quote-box-bottom.jpg)

The bottom shows a graphic for the power input specifications.

![quote box base front](/assets/blog/quote-bot/quote-box-base-front.jpg)

The printed parts use PLA filament and was printed on an older Qudi X2 printer at a slow 60mm/s.

![quote box side](/assets/blog/quote-bot/quote-box-side.jpg)

I would say this was more of an art project due to the quirky nature of the design, but it's still functional!

<!--
![quote box side 2](/assets/blog/quote-bot/quote-box-side-2.jpg)

![quote box context](/assets/blog/quote-bot/quote-box-context.jpg)

![quote box logic level converter](/assets/blog/quote-bot/quote-box-logic-level-converter.jpg)

![quote box angle 2](/assets/blog/quote-bot/quote-box-angle-2.jpg)

![quote box lcd box 3d printed texture](/assets/blog/quote-bot/quote-box-lcd-box-3d-printed-texture.jpg)

![quote box lookup to sd card](/assets/blog/quote-bot/quote-box-lookup-to-sd-card.jpg)

![quote box angle](/assets/blog/quote-bot/quote-box-angle.jpg)
>