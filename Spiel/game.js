"use strict";

//Zum zeichen
class Renderer{
    constructor(element){
        this.element = element;
        this.setup();
    }

    setup(){
        //Ball hinzufügen
        let box = document.createElement("div");

        //Position
        box.style.position ="absolute";
        box.style.top="20px";
        box.style.left="20px";

        //Inhalt
        box.style.backgroundColor ="red";
        box.style.width = "20px";
        box.style.height ="20px";

        this.element.appendChild(box);
        this.box = box;
    }

    //Bewegung
    render(){
        this.box.style.top ="40px";
    }
}

//Übergabe des Spielfelds
let renderer = new Renderer(document.getElementById("game"));

//Bewegung
setInterval(() =>{
    renderer.render();
}, 1000);