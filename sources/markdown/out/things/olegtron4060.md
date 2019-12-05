## Olegtron 4060 MK2

*[![Click to view demo video](/audiogear/olegtron4060still.700w.jpg)](/audiogear/olegtron4060.mp4)*
[View a short demo video](/audiogear/olegtron4060.mp4)

The Olegtron 4060 MK2 is a handheld signal generator based around the CD4060 CMOS chip, and it's weird as fuck.  

It's [available from Olegtron for €119](https://www.olegtron.com/olegtron-4060) and if you like noise or drone music, weird electronics, or just cool toys that make cool noises, I totally recommend it.  

It can be powered from a 9v battery, a wall wart, or by wiring a voltage differential to the power section. Depending on the position of a jumper, the Olegton will output a unipolar full-voltage, unipolar half-voltage or bipolar full-voltage signal. This makes it compatible with most applications you might want to throw at it, headphone audio at ±4.5v from the 9v battery, Arduino friendly signals at +3v powered straight from the Arduino board, or a whopping ±15v powered from a wall wart for driving motors.

### Operation
The way you use the 4060 is you connect electronic components to the big patch bay. There are no wrong ways to do this. The 4060 will happily continue to output a flurry of signals with pretty much no matter how you wire it up. Connect resistors, diodes, capacitors, LEDs, vactrols, whatever! Different components warp the output in different ways, and while you can move randomly and always get interesting sounds, eventually you begin to recognise certain patterns with certain components. Diodes and LEDs cause stuttering, transistors jumble up the sequence, and capacitors make sweeps and clicks.

The two big knobs affect frequency and current. The frequency knob affects the "pitch" of the device. At the lowest setting you get semi-structured clicks and blips, and at the highest you get a loud drone. Anything in between is a landscape of harsh textures and wild sequences.

### Social patching
You can connect up to 4 stereo 2.5" jacks, so the 4060 is also a fun social experience. Play with a friend, taking turns adding or removing components.  
The flashing lights and weird look makes it great nerd bait. I brought the 4060 to FOSDEM and was sat at the cafeteria playing with a friend, other people were curious and wanted to have a go. It was a pleasant experience, jamming with strangers, that I will attempt to recreate at other events I go to.

### Using with other gear
Because the 4060 accepts anything from 3v to 15v for power, and has some flexibility regarding its output voltages, it's easy to connect it to other devices or synths, and respect their expected values. I connected it to [my AE Modular](/things/ae-modular) a few times, and the 4060 turned it into a rowdy little machine. [Listen to some of the weirdness: killdest.ogg](/audiogear/killdest.ogg)


%YAML 1.2
---
title: Olegtron 4060 MK2
tags:
  - gear
  - modular
  - audio
  - review