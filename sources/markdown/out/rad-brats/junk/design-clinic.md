# Design Clinic pitch

Knot Knot Games Design Clinic - Sunday, September 20th 2026, 7PM London time

## The context: Rad Brats, a TTRPG about cool kids on badass adventures

[Rad Brats](https://spaceshipsin.space/rad-borg/) is a Mörk Borg hack that replaces the death metal ambiance with late 90s early 00s skater-punk saturday morning cartoon vibes.
The player characters are cool kids going out on totally badass adventures in an attempt to bring back a legendary band whose world tour was cut short by the apocalypse several centuries ago.
Adventures take place in "dungeons" that can range from raves and skateparks to subway tunnels and creepy laboratories.

## The design focus: A system for showing off

I'm designing a system for skating tricks.
It would be nice if this system supported other performances where characters show off their skills, like dance-offs or rap battles.

### Initial concept: push your luck

My initial and current approach is based on the idea of chaining tricks together in a line, rather than just pulling off one really good trick. This is inspired by skate videos and the combo mechanic from games like Tony Hawk's Pro Skater.

I'm thinking of using a "push your luck" mechanic, where after each success, you choose to continue your line to get even greater rewards, or end your line and take what you got.
Obviously, if you push your luck and fail, you lose everything you've accumulated and just humiliate yourself.

### Tie-in with Rad Brat's mechanics

This also might tie into how I modified Mörk Borg's Toughness ability.
Mörk Borg: *"**Toughness** Resist poison/cold/heat, survive falling"*
Rad Brats: *"**Guts** Resist poison, punches, fear, and humiliation"*

It ties in to how I describe "[death](https://spaceshipsin.space/rad-borg/rules/combat#whooped-(0hp))" in Rad Brats as: *"**Absolutely Dunked On** Totally humiliated, you're no longer cool enough to be an adventurer, go home..."*
I'd like for humiliation to be a way to lose HP in certain circumstances. In a setting about the coolest kids ever going out and being righteously badass, looking ridiculous is just as likely to end your adventure as being beaten up. I think mechanics where you can try to impress people at the risk of ruining your reputation totally fit right in.

## Current draft

The current draft looks like this:
- Risk starts at 1
- Describe how you perform the next trick, this will inform what ability is tested ([Moves, Smarts, Muscles or Guts](https://spaceshipsin.space/rad-borg/rules/abilities))
- Test challenge level: 10 + risk * 2
    - Fail: flip coins for each level of risk, take that much damage, and end your run
    - Success: Choose whether to push your luck or stop
- Push your luck: Increase risk by one, and go back to step two
- Stop: Gain risk as reward

### In context

This is a [d20 roll over system](https://spaceshipsin.space/rad-borg/rules/abilities#tests), and abilities are typically around -2 to +3, with a full range of -3 to +6.
The challenge for the rolls would therefore start at 12, and go up to 20 at risk level 5.
Players have access to "[flexes](https://spaceshipsin.space/rad-borg/rules/flexes)", a limited resource that regenerates on rest that allows them to give themselves bonuses. In this case, the useful flexes are: "add +4 on a roll" or "reroll dice".

### The reward

Exactly what rewards can be is vague right now, but that's not important for this conversation. Mechanically, the system just needs to provide an engaging way for players to show off their skills and gain variable rewards.

## Design questions and considerations

The design questions therefore are:
- Mechanically, does this system work out mathematically? Is the risk/reward worth it?
- Aesthetically, does this system feel like trying to show off recklessly, with an exciting knife-edge balance between pulling off some sweet moves that totally impress everyone at the skate park and completely biffing it and having to walk away to brush off your shame?

If either answer isn't a solid "yes", how can it be tweaked or reworked to work better?

Design considerations are:
- Do not introduce any new long-term stats or currencies, the minigame should be entirely self-contained
- Avoid introducing new systems and mechanics (like alternative dice resolutions), and instead build on existing systems
- Keep things as simple as reasonably possible
- The minigame is a moment for a player character to shine, so it's okay (and even desirable) for it to take more time than a single roll to resolve, but it should still be short and sweet so we can get back to the rest of the party and their shared adventure

# Things I've already started thinking about

## Let friends hype up the performer

- The performer gets a bonus to their rolls for each hype (bonus +1 or +2?)
- On a fail, hype buddies also flip a coin to see if they take a hit from the humiliation
- On success, do the hype buddies get a point of reward?
- Do this need to be balanced for party size?
- Can allied NPCs hype up the performer?

## Crits and fumbles

- Fumble: Take risk damage instead of flipping coins?
- Crit: ???

## Raising the difficulty is actually quite harsh, statistically speaking

- Maybe the challenge doesn't increase?
- Maybe the challenge changes dynamically with some kind of momentum mechanic?
- Tie challenge to success/failure
    - Message from @dead_iverson on the Mörk Borg Discord server: https://discord.com/channels/587764299834064933/687633091967451151/1550370001721098391
    - Inspired by Burning Wheel
    - Success above the challenge reduces the next test's challenge
    - Failure increases the next test's challenge
    - If I do this, maybe instead of a "push your luck" system, I should go for a "call your shots"?
        - "I'm going to chain 3 tricks"
        - Each success is a reward, each failure deals damage
        - Crit doubles the reward for the current trick
        - Fumble ends the run and deals damage for all remaining tricks