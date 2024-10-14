# Screenshake and french fries

We can (sincerely) thank Martin Jonasson & Petri Purho for [making "Juice" a thing](https://www.youtube.com/watch?v=Fy0aCDmgnxg), and JW Nijman for [encouraging the use of screenshake](https://www.youtube.com/watch?v=AJdEqssNZ-U)   
However, I think we're applying the letter of their message, rather than the spirit of their message.  
Video&hairsp;games run on screens, that update high-resolution pictures at a high refresh rate in reaction to player input. This might seem a little reductive, but it's really important, because it's one of the strongest things that video&hairsp;games have.   
Martin, Petri and JW were arguing for people to **use** that power. As a game programming teacher, I often see student projects where things are static and move in the most uninspired ways possible, and often, all it takes is a nudge for the student to understand just how much power they have. So those two talks are incredibly useful, for that first step.   

## Game feel as cooking
If you boil some pasta, and eat it. It's boring as hell. Add some salt and store-bought tomato paste and you've got the beginnings of a meal. So if all you're eating is plain pasta, my advice to you is *"add salt and sauce, and your meal will be tastier!"*. But that doesn't mean adding salt and sauce makes all meals tastier, and it doesn't mean that adding **even more** salt and sauce will continue to make you meal tastier.  
Salt tends to make most things tastier, within limits. Some food, like potato chips, *relies* on salt to be any good at all. But there are so many other things you can add to different meals and snacks. Spices, cheeses, herbs, oils, grains. You can also prepare all the ingredients in different ways, frying, baking, dicing, basting, marinating, and all different kinds of fermenting.   
So the first step in becoming a good cook, is taking that first step of adding salt and sauce. And then you keep going.   

## Why I'm being an elitist gatekeepey prick today
I saw another young dev post a trailer of a game with so much screenshake that I couldn't see what was happening. I see this *all the time*, and it makes me so sad. Vlambeer made a company off of screenshake, but that's their style, in the same way that french fries are usually very salty. But you're not Vlambeer, and not all games are french fries, and everything is super salty now and I don't think it's good for my health.   

Please use other spices, I assure you, they're delicious!

## Other things you can do
If you watch the two talks above, they actually mention a whole bunch of things aside from screenshake that you can use, so go and watch them again, but here are some of my favourites.

### Screenshake, but then make it fashion
Salt *is* good, use it, but like, in tasteful amounts, and where it makes sense. In the same way, use screenshake to add a little more punch to things, when things break or bump around, screenshake works well. Also, there are different things you can do to modulate your screenshake. Consider the direction, frequency and amplitude of the shake. Recoil works well as highly directional shake along the axis of the shooting. Small pops can benefit from tiny amplitude, high frequency shakes, whereas a big earthquake might be more of a large amplitude, low frequency rumble.  

### Particles
Use particles! Again, in tasteful amounts. Sure, that super-powerful spell or massive explosion will look great with a big shower of shiny particles, but consider also small poofs when feet touch the ground or a few quick sparks when projectiles hit surfaces, or maybe some abstract glows when items appear or are picked up? Short and sweet particle effects are one of the best ways to add a little touch of magic.   

### Tweens
If you need to make something move, make it move in a smoother way. In real life things accelerate, have mass, bounce, and all kinds of interesting motions. Tweens are a cheap and easy way to inject these kinds of motions to your simulated worlds. There are loads of tween libraries out there that will let you make things move in swoopy, bouncy ways.

### Secondary motion
This is a fancy way of saying "make other things move". Got a big gun shot recoil animation? What if one part of the gun recoils with bit more delay, and in the middle of the recoil animation the spent cartridge pops out? Now *that's* what I call badass!   
An easy way of doing this kind of thing in engines that have a physics engine included is to attach smaller objects with a rigidbody with one of the joint options to the main object. That way when the main object moves, the smaller physics-enabled objects will bounce and wobble.

### Mix & match
Have a look at the way things behave in your favourite games. Most often, the effects you'll see will use a mix of different techniques, animations, physics enabled objects, tweens, shader effects, particle effects, all coming together to make things look just right.  
Also, not everything needs a big fanfare to go with it. Some effects can be big and in your face, this is a great way to let the player know that something important is happening, but most of your effects will benefit from staying subtle and understated.


%YAML 1.2
---
title: Screenshake and french fries
tags:
  - blog
status: unpublished
created: 2019-10-17T09:58:17.000Z
updated: 2020-08-26T14:26:34.000Z
