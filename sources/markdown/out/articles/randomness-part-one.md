# Randomness

This is the first in a series of short articles about randomness; mostly in the context of video games.

<script>
    function n_to_d6(n) {
        
    }
</script>

<aside>

Unlike other pages on this website, these articles contain some JavaScript for the interactive examples.
The scripts do not read or store any user data, and do not communicate over the network.
</aside>

First, lets see an example with a simple six-sided die:
<aside>

Last roll: <span id="example-output-1-last">none</span>
Last 10 rolls: <span id="example-output-1-all">none</span>
Mean: <span id="example-output-1-mean">none</span>
<button id="example-button-1" type="button">Click Me!</button>
</aside>

<script>
    let rolls = [];
    document.querySelector("#example-button-1").addEventListener("click", ()=>{
        rolls.push(1+Math.floor(Math.random()*6));
        while (rolls.length>10) {
            rolls.shift();
        }
        let mean = rolls.reduce((a, b) => a + b) / rolls.length;
        mean = Math.floor(mean*10)/10;
        document.querySelector("#example-output-1-last").innerText = `${rolls[rolls.length-1]}`;
        document.querySelector("#example-output-1-all").innerText = `${rolls.join(', ')}`;
        document.querySelector("#example-output-1-mean").innerText = `${mean}`;
    })
</script>

Next, lets see what happens when we roll *a lot* of dice (1000):
<aside>

Mean: <span id="example-output-2-mean">none</span>
<button id="example-button-2" type="button">Click Me!</button>
</aside>

<script>
    document.querySelector("#example-button-2").addEventListener("click", ()=>{
        let rolls = [];
        for (let i = 0; i<1000; i++) {
            rolls.push(1+Math.floor(Math.random()*6));
        }
        let mean = rolls.reduce((a, b) => a + b) / rolls.length;
        mean = Math.floor(mean*10)/10;
        document.querySelector("#example-output-2-mean").innerText = `${mean}`;
    })
</script>



%YAML 1.2
---
title: Randomness - Part One
status: unpublished
created: 2022-11-06T11:43:27.254Z