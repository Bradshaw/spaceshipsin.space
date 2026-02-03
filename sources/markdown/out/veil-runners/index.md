# Veil Runners

**Veil Runners** is a TTRPG about a starship and its crew, diving deep into the Veil, an unstable region of space that has torn through the Orion arm of the galaxy.

This game is intended for three to six **players** and a **wayfinder**.

<aside>

⚠️ **Veil Runners** is still a work in progress. The mechanics are nearing completion, but there is currently no content or wayfinder guidance.

[Click here for a previous version of the rules.](/veil-runners/archive/old-rules)

</aside>

**Veil Runners** started as a hack of [Rust Skunks](/rust-skunks), another work-in-progress TTRPG. It keeps the concept of centering the story around a vehicle and its crew. Aside from the change in setting and tone, Veil Runners drops Rust Skunks' "Rig Running" scenes, and introduces sci-fi starship systems management mechanics.

You can read more about how **Veil Runners** was originally designed in this article: [Designing Veil Runners](/blog/designing-veil-runners)


+++ Table of contents
[[toc]]
+++

## System Overview

Veil Runners is about a ship and its crew. Each crew member is a player character, and the ship itself is a character too, shared by all the players.

The flow of the game is a back and forth between the wayfinder and the players. The wayfinder builds the situation around the players in reaction to the player' choices and actions.


## What you need to play

To play Veil Runners, you need:
- Six-sided dice
  - Ideally six for each player, and up to ten for the ship, but no more than six dice are ever rolled simultaneously
- Paper and pencils
  - Sticky notes are recommended, as they can be used to represent the modular nature of the ship and other systems
  - Erasable pens work well too
- Tokens and counters
  - Plastic markers, glass pebbles, coins, or other small objects are ideal
  - You can also use dice if you have a lot
  - Alternately, pencil marks can work too

If you're playing online, make sure you're using a dice roller that displays the individual dice results. Veil Runners' dice system involves rolling multiple dice and taking the best result. Also, use a virtual tabletop that allows you to easily move markers between boxes and create counters that can go from one to twelve.

## Starship & character sheets

The players share a single starship, and each have their own character.
The starship and characters function similarly to each other, with some shared features, and some key differences.
Here are brief descriptions of the starship and character sheets. The function of these elements will be described in later sections.
Feel free to add 

### Starship sheet
- Three CORE systems, labeled **CPU**, **HUL**, and **NAV**
  - Make three spots to place up to four dice each
- Four modules, labeled **#01** to **#04**
  - Allow space for module names and brief descriptions
- Three status tokens, labeled **Life Support**, **Integrity**, and **Engineering**
- Three focus tokens
  
### Crew sheet
- Three dice, labeled **Vitality**
- Three suit systems, labeled **Life Support**, **Primary Tool**, and **Secondary Tool**
  - Allow space for tool names and brief descriptions
- Three focus tokens
- *Sometimes:* Some crew upgrades give special tokens, make space for those if necessary

## Focus Tokens

Crew members and the starship can have up to 3 Focus Tokens each, and start the session with none. Focus Tokens are earned when rolling a fiasco.

Focus tokens can be spent in a number of ways:
- After making a ship or crew roll, spend tokens to increase the value of dice
- Crew members can spend a token to attempt to heal someone
- The ship can spend a token to perform a system shunt

## Rolls & Outcomes

There are two types of roll: Ship and Crew
It is up to the wayfinder and the players to decide on a case-by-case basis where the line is. As a rule of thumb, if the action involves using the capabilities of the ship, then it is a ship roll, even if a specific crew member is the one carrying out the action.
For instance: A crew member takes control of the ship's flightstick to weave through asteroids. This whould be a ship roll.

### Rolling
1. Determine number of dice to roll
  - Ship: take dice from the appropriate CORE system (CPU, HUL, or NAV), and add specialised CORE capability modules if appropriate
  - Crew member: take dice equal to Vitality, and add dice from equipment if appropriate
  - If there are no dice to roll, take two dice, and in step 4, read the **lowest** value.
2. Roll dice
3. Optional: Spend Focus Tokens to increase the value of dice, one for one.
4. Read the highest value (lowest if there were no dice to roll in step 1):
  - `1–3`: **Fiasco**, earn a Focus Token. If the roll was Risky or Desperate, take damage.
  - `4–5`: **Success w/ drawback**, if the roll was Desperate, take damage.
  - `6`: **Success**
  - Multiple `6`s: **Critical Success** (except when rolling "no dice")

+++ Probabilities at a glance
| **Dice** | **Fiasco** | **Drawback** | **Success** | **Critical** |
| :------: | :--------: | :----------: | :---------: | :----------: |
|  **0**   |    75%     |     22%      |     3%      |      -       |
|  **1**   |    50%     |     33%      |     17%     |      -       |
|  **2**   |    25%     |     44%      |     28%     |      3%      |
|  **3**   |    13%     |     45%      |     35%     |      7%      |
|  **4**   |     6%     |     42%      |     39%     |     13%      |
|  **5**   |     3%     |     37%      |     40%     |     20%      |
|  **6**   |     2%     |     32%      |     40%     |     26%      |
+++

### Group Roll
Outcome affects everyone equally.

- Fiascos cancel out Critical Successes, downgrading them to simple Successes
- At least one Success:
  - At least one Fiasco: **Success w/Drawback**
  - No remaining Fiascos: **Success**
- Otherwise, take best result

## Starship Configuration

### CORE Systems
- **CPU** – Communicate, detect, compute  
- **HUL** – Resist, sustain, survive  
- **NAV** – Navigate, avoid, manoeuvre  

#### Dice mapping
- 4 dice assigned to CORE systems
- Reassign dice with System Shunt

Systems can be shunted...
- ...after a critical success roll
- ...by spending a Focus Token after any roll
- ...at any time by spending the Engineering Token
- ...during downtime between action scenes

### Modules
- Numbered: `#1`, `#2`, `#3`, `#4`
- See `Module Types` section

### Tokens
- **Life Support**:  
  - When lost: Crew becomes Exposed
  - Can be spent to heal all crew on board:
    - Down and Out crew members regain consciousness and return to 3 vitality
    - Other crew members can choose to return to 3 vitality or repair one of their suit systems
- **Integrity**:  
  - Lost on first damage taken
  - Spend to automatically critically succeed on a ship roll instead of rolling
- **Engineering**:  
  - All ship rolls are desperate when lost
  - Spend to...
    - ...repair a destroyed module
    - ...jury-rig a module, changing it's functionality
    - ...automatically succeed on a ship roll instead of rolling

### Taking damage:
- Earn a Focus Token (up to 3)
- If the ship has the Integrity token, lose it
- Otherwise, roll d6
  - `1 - 4`: Destroy numbered module
    - Already destroyed: Wrecked!
  - `5 - 6`: Safe!
  
If the ship is Wrecked, the mission is over.

## Module Types

### Specialised CORE Capabilities
> Unique tools or upgrades tied to a core system.
> +1d6 for appropriate rolls.

*e.g:*
- **BIOSCANNER** (CPU): Detect lifeforms  
- **AFTERBURNERS** (NAV): Powerful straight-line acceleration

### Additional Capabilities
> Allows for bespoke capabilities
> Usually limited-use (1, 2, 3, or 6)

*e.g:*
- **MICROJUMP**: Teleport up to 100km, 3 uses
- **CLOAK**: Become invisible while motionless, 2 uses

### Passive Modules
> Minor upgrades with passive effects.
> Continues to function even when marked as destroyed.

*e.g:*
- **MEDBAYS**: Easier medical procedures  
- **CRYOBUNKS**: Crew can enter long-term stasis
- **CARGOHULL**: Expanded storage capabilities 

## Crew Loadout

### Vitality
> Start with 3 vitality

### Suit systems
- **Life Support**: Crew rolls are desperate if Exposed
- **Primary Tool**: +2d6
- **Secondary Tool**: +1d6

#### Equipment Examples

- **IMPACT DRILL**: Breach reinforced materials  
- **THERMAL LASER**: Cut standard materials  
- **SUPERMANOEUVRE KIT**: High agility + dodge  
- **MEDKIT**: Patch up allies

### Taking Damage
- Earn a Focus Token, and roll d6
  - `1–2`: Lose life support system
  - `3–4`: Lose primary tool system 
  - `5–6`: Lose secondary tool system 
  - If system already lost: lose 1 vitality
  
At 0 Vitality: Become Down and Out

When Down and Out, crew members are Incapacitated. They can still participate in conversations, but are unable to move by themselves or perform any kind of physical or expert actions.

If the entire crew is Down and Out, the mission is over.

### Healing a crew mate

- When out of danger, spend a Focus Token and make a Crew Roll:
  - Critical — crew mate regains 2 Vitality (up to 3)
  - Success — crew mate regains 1 Vitality (up to 3)
    - w/ Consequence: Spend another Focus Token or Take Damage
  - Fiasco — Spend another Focus Token or Take Damage

### Exposed
A crew member is Exposed if they are not in an environment that supports life.
*e.g:*
- On a space walk
- Life support systems are offline
- There is a fire or other dangerous environment

# Narrative Mechanics

Tables, Decks, and Clocks are the main mechanisms available for structured narration.

These mechanics are designed to help in improvisational play, and keep the tension high throughout the session.

The outcomes can be purely narrative, but they may also have mechanical effects too, like awarding Focus Tokens, or making the ship Take Damage.

## Tables

Lists of events, situations, items, or prompts.
Typically with 6 entries (d6), or 36 entries separated into 6 sections (d66).

When appropriate, roll dice to select an entry from a table.
For a d66 table, roll a d6 to select a section, and another to select an entry.

Tables are typically pre-written, and may be completely hidden from the players. This book contains a number of useful tables for a wide range of situations.

*e.g:*
Derelict space station status:
1. Abandoned, intact
2. Abandoned, ruined
3. Crew dead, intact
4. Crew dead, ruined
5. d6 surviving crew detected, ruined
6. Non-human lifeforms, intact

## Decks

A collection of cards with events, situations, items, or prompts.
Typically around 6 cards.

Used when exploring or searching. The contents of the deck may be known, partially known, or completely secret to the players.

Decks are typically composed during session preparation or on the fly depending on the Navigator's needs.

Decks can also be composed collaboratively. Start with a deck of four negative cards, then the players may add desirable cards to the deck. The Navigator adds a negative or neutral card for each player-added card.,

When players explore or search, randomly pick a card from the deck.

*e.g:*
Looking for survivors:
- Found the survivors.
- Found some dead bodies.
- Accidentally cause a life support failure. The crew is now Exposed.
- Found the station layout: from now on, pick two cards and choose which to keep, return the other card to the deck.
- Found the med bay, if power is restored, can be used once to heal the crew and survivors when found.
- Found the generator, can be reactivated to restore power. When power is restored, exploring is no longer Desperate.
- Hull breach, you are vented into space.
- Radiation anomaly, radio communications offline.
- Fire! Start a 6-segment death clock: All rolls are Desperate for the duration of the clock. The station explodes at the end of the clock.
- Found some veil-touched materials.

## Clocks

Ongoing events can be represented as clocks.
Have a certain number of sections:
  - Short: 4
  - Normal: 6
  - Long: 8
  - Extended: 10 or 12

Sections get filled in depending on their type, when completed, the narrative advances.

Typically, the crew is informed of what the clock's outcome will be.

### Clock types

#### Push clock

Desirable outcome.
Advances when the players succeed on actions to progress the clock.
- Success: +1
- Critical: +2

*e.g:* Repair the airlock, 4 segments, allows the crew to escape the space station when filled.

#### Catastrophe clock

Catastrophic outcome.
Advances when the players run into trouble.
- Success w/ drawback: +1
- Fiasco: +2

*e.g:* Unstable power core, 6 segments, irradiates the space station when filled (crew becomes Exposed).

#### Death clock

Catastrophic outcome. May also have an effect for the duration of the clock. Can typically be cancelled or delayed by the players.
Advances with time.

*e.g:* Collision course, 4 segments, starship collides with the asteroid when filled (ship Takes damage).

#### Augury clock

Narrative outcome, maybe be desirable, catastrophic, or neutral, but things will change.
The outcome is typically partially unknown to the players.
Advances with time.

*e.g:* The source of the mysterious signal is approaching, 8 segments.

# Advancement

## Ship Advancement

After a successful mission, the ship is allowed an upgrade.



## Crew Advancement

After a mission, successful or not, crew members are allowed to advance.

- Choose Upgrade or Mission Prep
- Upgrade:
  - Choose quality or suit upgrade.
  - If you do not already have an item from that list, choose freely.
  - Roll d6, if it lands on a new item, acquire it, otherwise, choose freely.
  - If you now have more than two items, choose one to lose.
- Mission Prep, choose one or roll twice (next mission only):
  1. 3 Focus Tokens (can go over maximum if rolled twice)
  2. Ingenuity Token, spend before rolling a Standard roll to automatically Succeed 
  3. Foresight Token, spend to turn a Desperate roll Standard
  4. Care Token, spend to automatically Succeed on a roll to Heal a crew mate
  5. Willpower Token, spend to fill or empty a single segment of a Clock
  6. Sheer Dread, earn an additional Focus Token on Fiasco crew rolls

### Qualities
1. Resourceful — You always roll 3d6+tool, regardless of Vitality
2. Relentless — When Down and Out, you can still take actions at 1d6+tool. Take Damage: You die, burn your crew sheet.
3. Expert — Choose an expertise, like "hacking" or "biology", gain +1d6 when it applies.
4. Forceful — When you spend Focus Tokens, instead of increasing values, pick dice to reroll. The new results are final.
5. Defender — When a nearby crew mate Takes Damage, you may spend a Focus Token, and roll Vitality:
  - Critical: Nobody Takes Damage.
  - Success: You Take Damage instead.
  - Fiasco: You both Take Damage.
6. Reckless: Instead of rolling, you can Take Damage for a Success.

### Suit Upgrades
1. Auxiliary Arm — Add a +1d6 tool to your Life Support system.
2. Oversized Systems — Secondary Tool gives +2d6 instead of +1d6.
3. Adaptive Plating — When Taking Damage, spend Focus Tokens to bump the die to hit a different system.
4. Ablative Armour — Gain a personal Integrity Token, lost when first Taking Damage.
5. Limiter Override — All of your crew rolls are Desperate, and you gain +1d6 on all crew rolls.
6. Recirculation Kit — Earn an extra Focus Token on failed crew rolls.


%YAML 1.2
---
title: Veil Runners
status: unpublished
tags:
  - veil-runners
  - ttrpg