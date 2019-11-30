## Buzz box project

Let's build buzz boxes, drone synths, noise machines, whatever you want to call them.

I've ordered a bunch of components I think will be useful for building such devices, mostly gleaned from schematics and projects I've found online.   
The two main sources of sound I can make with these are [Reverse Avalanche Mode (RAM) Oscillators](http://www.kerrywong.com/2014/03/19/bjt-in-reverse-avalanche-mode/comment-page-1/) and [555 Oscillators](http://www.555-timer-circuits.com/simplest-555-oscillator.html).  
For shaping, we can build [simple RC filters](https://www.instructables.com/id/Passive-Filter-Circuits/) or [the legendary MS20 filter](https://www.lookmumnocomputer.com/projects/#/simple-filter)   
And for modulation, we're going to build a bunch of [vactrols](https://www.aleph.co.jp/~takeda/radio/phaser/indexE.html) (LED strapped to a photodiode), although we might need to use some OpAmps to boost the voltage sent to the LEDs if we're running them off of the RAM oscillators.   

### Future plans

1. Learn to build gear so that I can pivot my career
2. Prepare the [Drone Day](https://droneday.org/) workshop at [Feral Vector](https://feral-vector.com/)
3. Make a drone album entirely from hand-built DIY junk
4. Get rich / Die trying

### Parts

As mentioned, I ordered a bunch of junk: [Mouser order for Buzz Box 0.0](https://www.mouser.fr/ProjectManager/ProjectDetail.aspx?State=EDIT&ProjectGUID=1ad1ec16-973f-488f-b742-9fba89d6b503)   
This was my shopping list before diving in:
#### Diodes
	- 1N4148

#### Capacitors
	- 1uf electrolytic
	- Other electrolytics up to 470uf
	- 470nf
	- 4.7nf
	- 100nf
	- 1nf

#### Transistors
	- SS9018 (Best transistor for reverse avalanche oscillation)
	- 2N3904
	- BC558 or BC559

#### Potentiometers
	- 100K
	- 10K
	- 4.7K

#### Resistors
	- 470K
	- 100K
	- 10K
	- 22K
	- 4.7K
	- 1.8k
	- 220
	
#### OpAmps
	- CA3080 (Needed for original MS20 filter, couldn't find on mouser, will look elsewhere)
	- TL074
	- LM13700

#### Other stuff
	- Jack sockets
	- 555
	- A bunch of 4000-series chips
	- DAC chips
	- Stripboard
	- LEDs (like really bright ones)
	- Photoresistors (Needed for vactrols, couldn't find on mouser, replaced with photodiodes and phototransistors)

%YAML 1.2
---
title: Buzz box parts
tags:
  - junk
  - buzz boxes
status: unpublished