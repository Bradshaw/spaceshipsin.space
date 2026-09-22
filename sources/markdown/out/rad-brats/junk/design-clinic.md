# Design Clinic pitch

[Knot Knot Games](https://knotknotgames.com/) Design Clinic [on Twitch](https://www.twitch.tv/knotknottv) - Sunday, September 20th 2026, 7PM BST

> The stream was fun, I've added some further thoughts at the bottom of this page: [Post-stream notes](#post-stream-notes)

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
    - [Message from @dead_iverson on the Mörk Borg Discord server](https://discord.com/channels/587764299834064933/687633091967451151/1550370001721098391)
    - Inspired by [Burning Wheel](https://www.burningwheel.com/collections/burning-wheel)
    - Success above the challenge reduces the next test's challenge
    - Failure increases the next test's challenge
    - If I do this, maybe instead of a "push your luck" system, I should go for a "call your shots"?
        - "I'm going to chain 3 tricks"
        - Each success is a reward, each failure deals damage
        - Crit doubles the reward for the current trick
        - Fumble ends the run and deals damage for all remaining tricks


# Post-stream notes

The stream was a lot of fun! Thanks a lot to Aram ([@5odrek.bsky.social](https://bsky.app/profile/5odrek.bsky.social)) for hosting it and taking the time to listen to my design questions and help me work through them and suggest additions and improvements.

When I pitched this mechanic for the design clinic, I had only just written the initial ["current draft"](#current-draft). After pitching it, I tried not to think about the problem so that I could go into the design clinic with a "clean mind". ADHD and fate conspired to keep my brain locked onto this system, and so I entered the stream with some of my own ideas on how to fix it.

First, notice that I just said that I had "ideas on how to fix it". Which meant that I already knew the system was broken. Mathematically, the original concept is brutal. Repeated rolls mean that the probability of getting more than two or three points is vanishingly improbable. This is because of two core problems.
The first is that increasing the difficulty of each test means that subsequent rolls become dramatically more difficult. This is obvious, of course, but still, it's worth mentioning.
The second is that probabilities multiply. If at each step there's a 50% chance of failure, then there's only a 25% chance of scoring two points, and a measly 12.5% chance of scoring three.

As soon as I posted the pitch, my brain was bubbling. I considered reducing the difficulty, and giving more options to increase the player's odds, such as allowing other players to help.
While asking about how other Mörk Borg GMs handle helping in their games, someone suggested a system for chained rolls (which I didn't mention at all in my question) where each roll affects the next. I considered this and added it to my notes, but that also made me consider a "call your shots" system where you declare in advance how many rolls you're going to do, and you can't back out once you've started.

During the stream, the brutal maths were confirmed, and once the trivial fixes (lowered difficulty, no change in difficulty, etc...) were exhausted, I told Aram I had considered other options, but I wanted his input first.

Aram came up with a fun spin on the minigame, inspired by the balancing mechanic in Tony Hawk's Pro Skater when grinding or performing a manual. Failing a roll wouldn't end the run, instead it would raise the difficulty of further rolls by the difference between the target number and the roll. So rolling a 7 when trying to hit a 10 would raise the difficulty by 3. Crucially (and I don't know if this is the case in the video game) the reward for future rolls would also be raised, giving an incentive to roll again when the difficulty is increased.
Running the maths, the expected value of these more difficult rolls has a fun curve where a slightly raised difficulty becomes much more valuable, but eventually the curve reverses until expected value drops to zero because the target value becomes impossible to reach.
Aram's system would fail the run when the difficulty hits a maximum value (five in his example).

Aram's version has two great benefits:
- It provides a "buffer", meaning your first failure isn't necessarily the end of the run
- The raised rewards, as mentioned above, mean that it's worth risking more difficult rolls

The buffer slightly reduces the "sharpness" of the knife edge, but I feel like that's actually a good thing, allowing the experience to last a little longer.
The raised rewards "fix the maths", so that's just an all around upgrade.

What I personally didn't like about this solution is that it greatly increases complexity. I'm already building a fairly complex minigame in a hack of a game that is meant to be simple and rules light. This adds a lot of maths, and makes the degree of failure relevant in a game that usually uses simple pass/fail outcomes.
These problems aren't inherent to the concept of adding a buffer and tying rewards to difficulty, and so I used this idea to produce [the next iteration](#the-next-iteration) of this system.

We also explored some other ideas...

Aram suggested an alternative system where the difficulty of the next test be the result of the previous roll, which would incentivise players to use all of their abilities, starting with their weaker abilities to roll low, and moving to their better abilities for the grand finale.
I feel like there's definitely a fun game in there, but I don't think it fits what I'm trying to do here. It also has some of it's own jankiness to handle, like needing an initial roll that doesn't have a difficulty target, or a trivially low target.

I suggested my "call your shots" solution. The idea here is that you announce how many tricks you're going to do in advance, and then you're committed to rolling that many times, with failures inflicting damage but not ending the run. Aram felt that this reduced the excitement of riding the knife edge, and I have to agree.

## The next iteration

This is how I'm going to run the system for now:
- Difficulty starts at 10, rewards for rolls start at 1
- A successful roll gives you the current reward level
- A failed roll raises the difficulty of the next roll and the rewards for rolls by 1
- I'm hesitating between one or the other:
    - Failed rolls deal damage to you
    - Two fails in a row ends the run and either
        - Cancels/reduces the rewards
        - Deals damage to you
- Crit: double rewards, and you can raise or lower the difficulty by 1 if you want
- Fumble: you biff it, end the run and take damage

Friends can help, giving you +1 to your rolls. If you fail, they also risk taking damage.
