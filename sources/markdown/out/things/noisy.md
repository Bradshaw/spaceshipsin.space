## Noisy Boys
I've gotten into modular synthesis recently, and I'd like to build modules and parts, based on weird ideas I have for sound generation, or a fascination with maths.

### Pisano sequencer
Pisano sequences are variants of the world-famous Fibonacci sequence, the only difference is the choice of the first two numbers. An interesting property of these sequences, is that you can take the remainder of the division of each number in the sequence by some other number, and you get a neatly repeating sequence of numbers. Because addition and modulo are simple operations that can be implemented in hardware, I'd like to build a simple clocked sequencer that use these properties.

### Physical slew rate limiter
Faders can be used to give a user control over a voltage in a system. Motorised faders allow the system to take control of said fader.
Because the motor, especially if starved of power, takes some amount of time to move the fader to the desired position, the voltage will slew, which can be an interesting effect for creating envelopes and motion in a synth patch. The module would then have a voltage input, and a comparator circuit that tried to drive the motorised fader to match the input voltage.
Finally, because the slew rate limiter is based on a physical fader, the musician can move and manipulate the output directly, adding human performance to the automated function.

%YAML 1.2
---
title: "Noisy Boys"
tags:
  - modular