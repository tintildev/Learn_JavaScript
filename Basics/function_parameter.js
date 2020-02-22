"use strict";

/*Erklärung das Programm wird von oben nach unten ausgeführt
Aber JavaScript lauft Asyncron deswegen kommt zuerst
-Fertig
- function() wurde ausgeführt - nach 2000 ms
- function() wurde ausgeführt - nach 4000 ms
*/

//Aufruf setTimeout Funktion
setTimeout(function(){
    //Log wird ausgeführt
    console.log("function() wurde ausgeführt");
    //warte 2000 ms
}, 2000); 

setTimeout(function(){
    console.log("function() wurde ausgeführt");
}, 4000); 

console.log("Fertig!");