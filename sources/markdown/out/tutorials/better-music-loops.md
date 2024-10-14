# Better music loops in video&hairsp;games (easy mode)

This tutorial will feature screenshots, code, and methods specific to [Renoise](https://www.renoise.com/) and [Unity](https://unity.com/), but the overall technique should be applicable for any audio software and game engine pairing.   
At the end of the article, there will be some notes for things you need to look out for if you're using other software.   
   
   
## What we're making today

Because the player is usually in control of what happens moment to moment in a video&hairsp;game, any music used in the game will typically be set to loop throughout any given scene. This often leads to a few awkward compromises.   
Music usually features intro and outro segments, ramping the intensity and mood to and from the main parts, and when a piece of music has several main parts, there are sections between to flow gracefully from one to the next. But if we want to use simple looping sound files, we're very limited with how we deal with this.
When the player moves from one scene to the next, we'll often just fade out whatever music was playing, and then fade in the next music. If we're feeling particularly fancy, we'll sync both of the loops up, but it still sounds a bit off. There's no "in between" part, we're just crossfading between two moods.   
   
One solution to this is to hire a very smart programmer who will work real tight with the composer, and they'll put together some dynamic music system that will make for an awesome GDC talk.   
   
Another is to write a single piece of music that flows from section to section, and then use just a handful of lines of code to continue looping one chunk of the sound file until we want to transition to the next.   
This is what we're making today.


## First, let's make the music

I used [Renoise](https://www.renoise.com/) to make a track for an arcadey action game. Here's how the music should behave during the game:
  * When the player is in the menu, loop a moody bassline
  * When the game is launched, play a buildup, then loop the first section
  * When the player reaches the "hard bit", move to the second, more intense section
  * And finally, when the player beats the game, transition back to a moody bit and loop that
  
Here's what this sequence looks like in Renoise
![Screenshot of Renoise's "Pattern Sequence Matrix" with markers for the various parts](/tutorials/renoise-sections.700w.jpg)

And here's the full track
<audio controls style="width: 100%;">
 <source src="/tutorials/furious-skies.ogg" type="audio/ogg">
 <source src="/tutorials/furious-skies.mp3" type="audio/mpeg">
 Your browser does not support the audio element.
</audio> 

I've tagged the various parts, and to keep things simple for myself, all of the "chunks" are the same length.  
In all, we have 14 chunks, and as the game rolls on, we're going to be looping the following chunks:
  * Intro: loop chunk 0
  * Part one: loop chunks 3 & 4
  * Part two: loop chunks 7 & 8
  * Outro: loop chunks 11 & 12

In between the chunks there are the bits we need to make the transitions sound good, like a drum flurry before each drop, and a little choppy effet when we remove the "reese" synth for the outro.





