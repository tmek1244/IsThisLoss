# In progress
---


# Split keyboard IsThisLoss 

Welcome to the IsThisLoss repository. In this README you will find my knowledge about split keyboards, usefull materials to learn from, my steps of building this keyboard, tools I used etc. Hope that will help someone, same as mamy other usefull sources helped me.

## Table of Contents

- [Project Overview](#project-overview)
- [Usefull Recourses and Tools](#usefull-resources-and-tools)
- [Keyboard Design](#keyboard-design)
- [Tips & Tricks](#tips--tricks)


---

## Project Overview

![Keyboard Image](imgs/final_keyboard.jpg)

This project is a documentation of my journey in creating a custom split keyboard. It encompasses every stage of the process, from the initial design concept to the final product. Whether you're a fellow keyboard enthusiast or just curious about the DIY keyboard-making world, this repository is meant to inspire, educate, and entertain.

## Usefull Recourses and Tools

### Youtube videos
Here are three great videos from [Ben Vallack](https://www.youtube.com/@BenVallack/videos):
- About [Ferris Sweep Compact](https://www.youtube.com/watch?v=JqpBKuEVinw&ab_channel=BenVallack) - process of ordering, customising and building that keyboard
- [Designing your custom keyboard](https://www.youtube.com/watch?v=UKfeJrRIcxw&ab_channel=BenVallack)
- [Designing your custom keyboard in depth](https://www.youtube.com/watch?v=M_VuXVErD6E&ab_channel=BenVallack)
Here is a video about KiCad, rather long tho (1:40) and its probably not necessary, but in case your would like to learn more about this powerfull tool
- [Designing STM32 PCB](https://www.youtube.com/watch?v=aVUqaB0IMh4&ab_channel=Phil%E2%80%99sLab) - KiCad tutorial


### Articles
- [FlatFootFox](https://flatfootfox.com/) - you can find there 6 articles about designing your custom keyboard with Ergogen v4. It starts from [introduction](https://flatfootfox.com/ergogen-introduction/). 
- [How key matrices works](https://pcbheaven.com/wikipages/How_Key_Matrices_Works/)

### Ergopad
[Tool](https://pashutk.com/ergopad/) allowing you to try and see how your fingers moves and which layout would be the most suitable for you. Quite interesting tool, but after all I haven't used it.

### Ergogen
Open source project on [github](https://github.com/ergogen/ergogen). It provides a common configuration format to describe 2D layout and generate plates, cases and un-routed PCBs. You can clone this repo (which will be usefull at some point) or play with online version. 
There are two available versions [ergogen.xyz](https://ergogen.xyz/) and [ergogen.cache.works](https://ergogen.cache.works/), but I recommend the latter as it shows in real time how would your keyboard looks like. 

### KiCad
KiCad is a free software suite for electronic design automation. It facilitates the design and simulation of electronic hardware. It features an integrated environment for schematic capture, PCB layout, manufacturing file viewing, ngspice-provided SPICE simulation, and engineering calculation.
I found this tool pretty intuitive and if you want to just desing keyboard you really don't need to know much about this software (Ergogen will genereate most of that for you).

### ZMK
[ZMK](https://zmk.dev/) is open source keyboard firmware focused on wireless and battery-powered keyboards. Other popular option for a firmware is [QMK](https://qmk.fm/) but it doesn't support wireless keyboards. Because I wanted to have cleaner setup I went with the former.
You can find my config z[here](https://github.com/tmek1244/zmk-config).


## Keyboard Design
### Intro
I knew which layout looks the best for me - [Kyria rev3](https://splitkb.com/collections/keyboard-kits/products/kyria-rev3-pcb-kit). It has 50 keys which is a lot compared to many other split keyboards ([one key keyboard](https://www.youtube.com/watch?v=vr8LkjsRqZs&ab_channel=BenVallack)), but I didn't want to make it too compact.

### Start with Erogopad
Go checkout [Ergopad](https://pashutk.com/ergopad/), it didn't work for me, but might work for you. Having a tablet would be an advantageous as you will be tapping on screen.

![](imgs/ergopad.png)

### Create design in Ergogen
I had a lot of struggles with writing anything in Ergogen, until I found a tutorial about new at that time version 4 from FlatFootFox. I encourage you to go check that out. 
Important thing to metion, I only desinged one side (and probably you should too) because get the other one for free! You just put this piece on the other side. This has its consequences, namely the pins on the other side will be reversed. That means that you would have to put microcontroller on the other side too. I didn't like that much so I use footprint suggested by Ben Vallack in one of his tutorials - [promicro pretty](/ergogen/src/footprints/promicro_pretty.js). 
The config is written in yaml, if you're using [ergogen.cache.works](https://ergogen.cache.works/) you can see your progress in real time, which is realy cool. Using Ergogen you can create pcb layout (which is the main advantage), but other staff like creating cases or plates are also great.

![](imgs/ergogen.png)

Next I printed out my mockups on piece of paper, stick it to the cardboard and put switches in. This way I was able to actually feel how it's gonna be typing on this keyboard.   

<img src="imgs/paper_kb.jpg" alt="drawing"/>
<img src="imgs/mockups.jpg" alt="drawing"/>
After iterating over 3 designs and choosing the best one (the standard one lol), I begin with creating actuall PCB desing. I used a few new footprints, which I found in Ben Vallack [repository](https://github.com/benvallack/ergogen). In some of them I had to change a few things, as his config was written in Ergogen v3. You can find all these footprints in [/ergogen/src/footprints/](/ergogen/src/footprints/) as well as the final [config](/ergogen/config.yaml). 


- create your desing in Ergogen (FlatFootFox posts might be very helpfull)
- if you want to have custom footprints in your PCB, you will have to install Ergogen localy and add these footprints into `src/footprints/` (you can find footprints used by me in this repo)
- I encourage you to print your layout on piece of paper, stick it to the cardboard and put switches in, to try out your keyboard 
- after you are happy with your desing you can connect all components in KiCad (or other similar tool)
- order PCB at jlcpcb or pcbway (I think these are two main manufacturers)
- solder everything together
- play with software

One of my colegue motivated me to learn touch typing (after I saw him writing on his split keyboard). During that time I found it pretty inconvinient to typing letters like "p" with my pinky and I started thinking about buying split keyboard for myself. 
Many of them are actually sold in IKEA style, you order parts and then you have to solder all together. So I thought to myself, why would I buy premade PCB, when I can desing it on my own. And that's how it started.



I started by working with Ergopad and then I tried to map this desing in Ergogen. 
I managed to desing keyboard that should suits my fingers, printed it out on paper and give it a try. To be fair on a flat paper I could really say a lot so I decided to buy switches, keycaps and microcontrolles first.
When I was waiting for them to arrive I stared playing with KiCad. 
I didn't like having two microcontrolles in different way, so I had to use custom footprint (you can find )




After they arrived I created my first mockup using cardboard so switches would stay in place.

![mockup pic]()

The first desing didn't feel good - pinky part was to tilted. I do two more tries and went with the most standard one (on the bottom).
![3 mockups pic]()




## Tips & Tricks
- if you want to avoid mounting diodes you have to reduce the number of keys to number of pins available on your microcontroler (for Nice!Nano is it 17). It has to know which key was pressed and you couldn't tell it if there was a multiple keys connected to one pin right.
And that's where key matrices are used (you can read more ![here](https://pcbheaven.com/wikipages/How_Key_Matrices_Works/)). It turned out being pretty easy to understand and use. Routing was a little be trickier but that's about that.
Also you may think that soldering such small parts as SMD diodes would be hard, but that's also not the case! Although you have to have a good pair of tweezers. 
- 


The `challenges-solutions` directory is where I discuss the hurdles I encountered during this project and the innovative solutions I devised to overcome them. If you're embarking on your own DIY keyboard journey, this section might provide valuable insights into problem-solving.

## Documentation

The `documentation` directory is the heart of this repository. Here, I've documented my entire journey, from ideation and prototyping to assembly and testing. You'll find detailed write-ups, explanations, and reflections on various aspects of the project. Whether you're here to learn or share experiences, this section is a treasure trove of information.

## Inspirational Pics

![Inspiration Image](link_to_inspiration_image.jpg)

For those who appreciate the visual aspect, the `inspirational-pics` directory is a collection of images showcasing the keyboard's evolution. These images capture the beauty of the journey, from the very first sketches to the final, fully functional split keyboard.


