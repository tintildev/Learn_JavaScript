"use strict";
let time = 2500 + Math.random() * 5000;
console.log(time);

//Ausführen
window.addEventListener("load", function(){
    //Timeout
    setTimeout(function(){
        //Zeit Start
        let start = Date.now();
        //Farbe
        document.body.style.backgroundColor ="green";

        //Funktion für Klick Zeit
        document.body.addEventListener("click", function(){
        let end = Date.now();
        let difference = end - start;
        alert("Du hast: " + (difference / 1000) + "Sekunden benoetigt!");

        //Seite neuladen
        document.location.reload();

        }, false);

    
    }, time);
});