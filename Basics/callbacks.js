"use strict";

//Zähler der jede Sekunde um 1 hoch zählt
let counter = 0;
setInterval(function(){
    counter = counter + 1;
    console.log(counter);
},1000)

//Eventlistener, gib eine Ausgabe wenn ein Button geklickt wurde.
window.addEventListener("load", function(){
    document.getElementById("click-me").addEventListener("click", function(){
        console.log("Button wurde gedrückt");
    
    }, false);
})
