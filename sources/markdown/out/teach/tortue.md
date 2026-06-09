# La Tortue
*ou une introduction au code via un exercice de 1967*

Le langage de programmation [**Logo** et son outil de dessin "Turtle"](https://fr.wikipedia.org/wiki/Logo_(langage)) ont été conçus vers la fin des années 60 par [Wally Feurzeig](https://en.wikipedia.org/wiki/Wally_Feurzeig), [Seymour Papert](https://fr.wikipedia.org/wiki/Seymour_Papert), et [Cynthia Solomon](https://fr.wikipedia.org/wiki/Cynthia_Solomon), chercheurses en informatique. L'objectif était de créer un langage de programmation et des outils ludiques et approchables afin d'encourager les enfants à se familiariser avec et prendre en main des concepts informatiques.

Ce document est un supplément à mon cours d'introduction à la programmation. Il inclut les informations nécessaires pour mettre en place le projet initial, et détaille les concepts abordés avec des éxemples et exercices.

+++ Table des matières
[[toc]]
+++



+++ Un block de code en C#
```cs
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class MyTurtle : TurtleBase
{
    // Turn(float degrees)
    // Advance(float distance)
    // ChangeColor(Color color)
    // PenUp()
    // PenDown()
    // void Start()
    {

        PenDown();
        Advance(1);
        Turn(90);
        ChangeColor(Color.red);
        Advance(1);
        PenUp();
        Advance(1);
    }
}
```
+++