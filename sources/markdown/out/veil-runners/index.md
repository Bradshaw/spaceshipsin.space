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
- [Emergency Shunt](#emergency-shunt)
- [Action Shunt](#action-shunt)

##### Downtime Remap

"Downtime" is any moment in the game where there is no immediate time pressure on the crew. When the players are debating their options, and there's no imminent threat, they can choose to remap their systems' dice as they wish.
They can do this as many times as they like, and are only "locked in" when downtime ends.

##### Emergency Shunt

If the ship has the [engineering token](#engineering-token), the crew can perform an **emergency shunt** at any time.
To do so, the crew spends the **engineering token**, and then remaps their dice as they wish, similarly to a [downtime remap](#downtime-remap).

##### Action Shunt

In the middle of the action, every second counts, there's no time to fiddle with settings and reroute power around the ship, instead, the crew has to deal with things as they come.

When performing a systems roll, the player taking action will collect all the dice from the relevant system, and the outcome of the roll determines how they will return them.

**Reactive Shunt**: The crew is informed of the consequence of the roll, and with this information, is allowed to return the rolled dice to the systems of their choosing.

**Standard Shunt**: The crew must immediately return the rolled dice to the systems of their choosing.

**Stabilise**: The rolled dice are simply returned to the system they were taken from.

**System fault**: The crew loses one of the rolled dice, and returns the rest to the system they were taken from. If that was the only rolled die, the ship [takes damage](#taking-damage).

After a **normal roll**
- **Success**: Reactive Shunt
- **Partial**: Standard Shunt
- **Failed**: Stabilise

After a **desperate roll**
- **Success**: Standard Shunt
- **Partial**: Stabilise
- **Failed**: System Fault

### Modules

#### Module types

### Taking damage

When the ship **takes damage**:
- If the ship has the **integrity token**:
  - Remove the **integrity token**
  - No further damage is done
- If the ship has the **engineering token**
  - The crew can decide to spend the **engineering token** to avoid a potential **system crash**
  - If they do so:
    - Remove the **engineering token**
    - No further damage is done
- **System crash!**
  - Roll a die:
    - 1-4:
      - Destroy the module with that number
      - If it has already been destroyed, destroy the ship, the adventure ends here
    - 5-6: No further damage is done

## Tokens

Certain resources are tracked by **tokens**. Tokens represent a *thing* that can be either available or lacking.

The ship has:
- Integrity: Protects the ship the first time it [takes damage](#taking-damage)
- Engineering: Allows the ship to use its [systems](#systems)

The crew has:
- Supplies: Power for the crew's life support, food, medical supplies, etc...
- Reserves: Used to barter, gain connections and access, buy gear, pay bribes, etc...

### Integrity token

When the ship has the **integrity token**, the ship is stable and in one piece. The situation may be dire, but the shields are holding strong, the ship's systems are up and running. The crew is in (relative) safety.

When the ship has lost the **integrity token**, things are starting to look scary.
Smoke fills the cabin, alarms blare out, non-vital systems are shut down as power is rerouted according to triage protocols.
From now on, further damage can be fatal.

Mechanically, the first time the ship [takes damage](#taking-damage), it simply loses the **integrity token**.
Subsequent damage runs the risk of destroying systems, and eventually, the ship itself.

#### Engineering token

When the ship has the **engineering token**, its systems are operating at peak efficiency. The crew can confidently rely on the ship's sensors, shields and engines.

When the ship has lost the **engineering token**, its systems are damaged, pushed beyond their safe operating limits. Each sensor ping causes the computer screens to flicker, the thrusters let out gut-wrenching screams when fired, and the shield projector is overheating dramatically.

Mechanically, when the ship has lost the **engineering token**, all **systems rolls** are **desperate**.
The **engineering token** can be spent to avoid risking a system crash when [taking damage](#taking-damage).
It can also be spent to overload the ship's systems and get an automatic **success** on a **systems roll** or **module roll**.
Narratively, it can be spent as part of a dramatic action that requires pushing the ship harder than usual. For instance jump-starting the reactor of another ship or power

### Supplies token

When the crew has the **supplies token**, there's food in the pantry, the air scrubbers and temperature regulators are working, the medbay is stocked, and the hygenics bay has running water.

When the crew has lost the **supplies token**, life aboard the ship becomes difficult. Temperatures begin to rise. The crew is reduced to chewing on half a nutri-goop ration per day. Injuries will have to wait until a safe harbour is found.

Mechanically, each crewmember loses one of their personal dice every day.

### Reserves token

Reserves are an abstract concept. They can represent money, but they can also take the form of valuable items, favours owed, a good reputation, and many other things. Reserves are whatever allow the crew to gain access to resources and negociate with people.

Deep inside the veil, reserves don't really have much use. Anomalies and thrusters don't care about money or reputation, and you can't buy your way out of a void collapse.

Aboard stations or when travelling in controlled space, reserves are everything.

When the crew has the **reserves token**, they can dock at stations, get food and basic goods, go to the local pub