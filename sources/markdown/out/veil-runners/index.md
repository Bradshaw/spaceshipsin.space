# Veil Runners

**Veil Runners** is a (very much work-in-progress) TTRPG about a starship and its crew, diving deep into the Veil, an unstable region of space that has torn through the Orion arm of the galaxy.

This game is intended for three to six **players** and a **wayfinder**.

<aside>

This page is a placeholder for now.

**Veil Runners** started as a hack of [Rust Skunks](/rust-skunks), another work-in-progress TTRPG. It keeps the concept of centering the story around a vehicle and its crew. Aside from the change in setting and tone, Veil Runners drops Rust Skunks' "Rig Running" scenes, and introduces sci-fi starship systems management mechanics.
</aside>

+++ Table of contents
[[toc]]
+++

## About this document

This document is mostly intended for the **wayfinder**, and assumes that you are the wayfinder.
Other TTRPGs may call this person the [gamemaster](https://en.wikipedia.org/wiki/Gamemaster).

If you're a player, you might prefer to read the [Player's Guide](/veil-runners/players-guide) instead.

### Content notes

There are a wide range of themes and subjects that can appear in a Veil Runners adventure, some of which may be difficult or distressing. Very few of the sensitive themes are essential to the game, and it is your responsibility, as the **wayfinder** 

## The ship

### Systems

All ships have the following three systems:
- Telemetry
- Engines
- Shields

The crew has five dice available to them, that it can distribute between these systems.
Dice can be remapped between systems by the crew, following the [remapping rules](#remapping-dice)

#### Remapping dice

Remapping dice can happen in one of the following ways:
- [Downtime](#downtime-remap)
- [Action Shunt](#action-shunt)
- []

##### Downtime remap

"Downtime" is any moment in the game where there is no immediate time pressure on the crew. When the players are debating their options, and there's no imminent threat, they can choose to remap their systems' dice as they wish.
They can do this as many times as they like, and are only "locked in" when they move to act.

##### Action Shunt

In the middle of the action, every second counts, there's no time to fiddle with settings and reroute power around the ship, instead, the crew has to deal with things as they come.

When performing a systems roll, the player taking action will collect all the dice from the relevant system, and the outcome of the roll determines how they will return them.

**Standard Shunt**: The crew is informed of the consequence of the roll, and with this information, is allowed to return the rolled dice to the systems of their choosing.

**Emergency Shunt**: The crew must immediately return the rolled dice to the systems of their choosing.

**Stabilise**: The rolled dice are simply returned to the system they were taken from.

**System fault**: The crew loses one of the rolled dice, and returns the rest to the system they were taken from. If that was the only rolled die, the ship [takes damage](#taking-damage).

After a **normal roll**
- **Success**: Standard Shunt
- **Partial**: Emergency Shunt
- **Failed**: Stabilise

After a **desperate roll**
- **Success**: Emergency Shunt
- **Partial**: Stabilise
- **Failed**: System Fault

In the case of [chained rolls](#chained-rolls), there is no remapping until the end of the chain, but the crew is a allowed a full remap, as if they were in downtime.

### Modules

#### Module types

### Taking damage

When the ship **takes damage**:
- If the ship has the **integrity token**:
  - Remove the **integrity token**
- Roll a die:
  - 1-4:
    - Destroy the module with that number.
    - If it has already been destroyed, destroy the ship, the adventure ends here.
  - 5-6: No further damage is done.