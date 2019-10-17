## AE Modular

*[![My AE Modular system, fully patched](/audiogear/aemodular-front.700w.jpg)](/audiogear/aemodular-front.jpg)*

This article will serve more as a review than anything else.  
At the time of writing, I've been the owner of a Tangible Waves AE&nbsp;Modular Starter Rack 2 for just over six months, and I'm bored of making excuses for it.  
It's mostly unusable, it's not at all fun to use, it doesn't sound very nice, and it's falling apart.  

### The AE Modular format
AE&nbsp;Modular is a *tiny* format (10×2.5cm modules), and the goal is to be cheap.  
This format uses patchwire cables (like the ones you use in Arduino prototyping projects), inputs are grouped in the top left, outputs in the top right, and the lower three quarters of the modules have the knobs and switches. Text and indications are simply stamped onto the faceplate, the knobs are small and the switches are smaller.   
Everything runs on a simple 0→5v system, audio is centered at 2.5v and oscillators have around 2v of throw.  
A bus carries GND, 5v power and a few signals through the rack and to each module.  
The rack is powered from a **MASTER&nbsp;I/O** module that also sends MIDI signals across the bus.  
  
### The positives
1. It's cheap
2. It's small

That's it… At this point it's the only good I can say about it. If all you care about is *literally* just the cost and the portability of your modular system, then maybe this is for you, but I feel like too many compromises were made here.  

### The downsides

I'm going to go down quite a few things here. The name, the design, the build quality, and the problems. So here goes…

#### The name
The *AE* in *AE&nbsp;Modular* stands for *Abused Electronics*. I know why they chose this name, using electronics in unintended ways is fun, but the term has connotations that make it an awkward moment when talking to people about this format.  
If this was the only thing wrong with this machine it would just be an awkward side-note. However, it feels like this unpleasant choice of name reflects lack of the care and maturity of the whole system.

#### The design & build quality
The sockets for the patchwires have connectivity problems and wires pop out. I'm told the future modules have improved sockets, but my system is hard to use because of this.   
There are holes drilled in the backplate to allow access to the trimming pots for the oscillators, but they're only drilled on one side of the system, so while you can move modules around, if you intend to tune your oscillators, you'll need to keep them on the left.   
Some of the knobs are scratchy, so you can hear pops and crackles when tweaking values.  
All of the knobs are simple potentiometers, even for modules and values that should be selectors, like the division on the **BEAT DIVIDER**.  
The 0→5v range makes it incompatible with other modular formats that almost all use a -12→12v range. It is possible to use the **MASTER&nbsp;I/O** to get 2 audio ins or outs and 2 CV ins or outs, but other than that, choosing an AE&nbsp;Modular system pretty much locks you in.

#### The oscillators
As mentioned earlier, the oscillators have a trim pot on the backside for tuning. The tracking is dependant on the that pot and the front-side frequency knob, so if you ever want to shift an oscillator relative to the others, you'll need to adjust the trim pot for it to still track 1v/oct (kinda, the tracking will always be a little off, especially on the **2OSC**). What this means is that any attempt to stay in tune will require a screwdriver to adjust the trim pot each time you play with a frequency knob.  

The **2OSC** module has a knob for oscillator 1 pulse width, but not for oscillator 2, you'll need to wire in a voltage to its PWM input.  
The SYNC inputs silence the oscillators when their value is high, so they're useless on the **2OSC**, but they do work properly on the **VCO**.  
The **2OSC** oscillators have 4 outputs each:
* Two pulses (labeled as square)
* A sawtooth
* A nothing (labeled as pulse)
 
The pulsewidth has a very tight range on both the **2OSC** and the **VCO**, using the full 0→5v input will cause silence on either end, so you'll need to attenuate any voltage to those inputs.

#### The filters
The two **FILTER _Wasp type_** modules are very resonant when the resonance knob is at zero, and they're extremely resonant, but terribly quiet when the knob is turned up. They do not self-oscillate.   
The freq knob is only useful from just a little to the left of the 12 o'clock position and up, anything below that position has no effect on the sound.  
There are two CV inputs (nice!) but only the first has an attenuator knob.  

The **NYLE FILTER** module has a better behaved resonance, with a smooth ramp from calm to *screach* as the resonance is increased. This filter will self-oscillate, but it's not a particularly pleasant sound, more like a distorted noisy sine wave than the purer tones from modules you may have used elsewhere.  
This time the freq knob is even weirder. From 12 o'clock upwards, it behaves mostly as you'd expect, even if above the 3 o'clock position we've already reached the maximum. However, below the 12 o'clock, the low pass is gated out, but the band and high pass channels will become silent, and then open back up and let all frequencies through after a few seconds.

#### The sequencers
None have an internal clock, so you'll need to use an LFO to clock your sequencers.   
The **SEQ16** is a *mess*, you have 5 pitch knobs that you use to pick 5 voltages, plus an extra 0v for free, for a total of 6. Then you have 16 knobs to write your sequence with, picking one of the 6 voltages, or a pause, for each step. Theres no quantizer, and you can't easily pick voltages to "pre-listen" to, so finding 6 notes that form a workable scale is a pain. And the 16 knobs are linear potentiometers, not selectors, so it's very fiddly having to line up the indicator on the knob with the printed markings.
The RESET input has a different behaviour on the **STEP10**, **SEQ16** and **BEAT DIVIDER** modules, so you have to come up with fun strategies to get them all in sync.

#### Utilities
The **LFO**s don't have a CV in, but they do have PWM for some reason.   
The **NOISE** has a random pulse output, but its slowest rate is still too fast for most uses.   
The **DELAY** actually pushes signal back through its input, which means that simply having the **DELAY** in your patch anywhere will add echoey noise to your composition, even if the **DELAY**'s output is disconnected.

## In conclusion
This system cost me €674.73  
That's the total for an **AE&nbsp;Modular Rack 2**, and extra **2VCA**, **NYLE FILTER** and **SEQ16** modules.  
This is just about half the cost of the [Erica Synths Pico System II](https://www.ericasynths.lv/shop/eurorack-systems/pico-system-ii/), slightly more expensive than the [Teenage Engineering 400](https://www.teenageengineering.com/products/po/modular), and more expensive than some semi-modular boxes like the [Make Noise 0-Coast](http://www.makenoisemusic.com/synthesizers/ohcoast). If I was to make that choice again now, I don't think AE&nbsp;Modular would be the path I choose.

At first it was fun playing with my own modular system for the first time. Figuring out how each module interacts with the others, spending time getting to know my system and teasing out sounds I'd heard from other artists.  
And then realising that the quality of the modules really wasn't there. Between awkard tuning, obvious missing features, and weird idiosyncrasies, this feels more like someone's DIY hobby project than a commercial musical instrument.   
I was thinking about trying to build some DIY stuff for this admittedly simple format, but while it *is* simple, most, if not all, schematics for custom modules are for the more common -12→12v range.  
I think I'm going to bite the bullet and sell off this unit if I find someone who wants it, and get a Eurorack system instead…

%YAML 1.2
---
title: AE Modular
tags:
  - modular
  - gear
  - audio
  - review