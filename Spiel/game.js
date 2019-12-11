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
    render(position){
        this.box.style.top = position + "px";
    }
}

class Game {
    constructor(element) {
        this.render = new Renderer(element);
    }

    start(){
        //Bewegung
        let counter = 0;
        setInterval(() =>{
        counter = counter + 1;
        this.renderer.render(counter);
        }, 100);
    }
}

//Übergabe des Spielfelds


let game = new Game(document.getElementById("game"));
game.start();
