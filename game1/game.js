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
        box.id = "fallingBox";

        //Position
        box.style.position ="absolute";
        box.style.top="5px";
        box.style.left="20px";

        //Inhalt
        box.style.width = "20px";
        box.style.height ="20px";

        //Einfügen
        this.element.appendChild(box);
        this.box = box;

    }

    myRemove(){
        this.box.remove();
        this.box.style.top="5px";
        this.box.style.left="20px";
    }

    //Bewegung
    render(position){
        this.box.style.top = position + "px";
    }
}
//Bewegungs Logik
class Box {
    constructor(){
        this.position = 0;
        this.speed = 0;

        /**
         * Negativer Speed: Nach oben
         * Positiver Spedd: Nach unten
         */
    }
    //Bewegungs Logik nach unten
    runLoop(){
        this.speed++;
        this.position = this.position + this.speed;
    }
    //Logik für nach oben
    moveUp(theValue){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let theBox = document.getElementById("fallingBox");
        let theNewColor = '#' + randomColor;
        theBox.style.backgroundColor = theNewColor;
        this.speed = -20;
        console.log("Klick durch: " + theValue)
    }
}

class Game {
    constructor(element) {
        this.renderer = new Renderer(element);
        this.box = new Box();
        this.element = element;
        
        //Läuft das Spiel
        this.isRunning = true;
        this.setup();
        this.space();
    }

    //Klick auf Box
    setup(){
        this.element.addEventListener("click", () =>{
            this.box.moveUp("Klick");
        }, false);
    }

    //Space
    space(){
        document.addEventListener('keyup', event => {
            if (event.code === 'Space'){
                this.box.moveUp("Space");
            }
        });
    }


    start(){ 
        //Highscore
        let counter = 0;

        let timer = setInterval(() =>{
            counter++;
            this.box.runLoop();

            //Button Jump
            jumpBtn.addEventListener("click", () => {
                this.box.moveUp("Button");
            });


            //Obere Rand
            if(this.box.position < 0){
                this.isRunning = false;
                //Intervall abbrechen
                clearInterval(timer);
                alert("Oberer Rand erreicht: Gameover, " + counter + " Punkte!");
                this.renderer.myRemove();
            }
            //Unterre Rand
            if(this.box.position + 20 > this.element.clientHeight){
                this.isRunning = false;
                //Intervall abbrechen
                clearInterval(timer);
                alert("Unterer Rand erreicht: Gameover, " + counter + " Punkte!");
                this.renderer.myRemove();
                
            }
        this.renderer.render(this.box.position);
        }, 40);
        console.log(timer);
    }
}

//Übergabe des Spielfelds
let jumpBtn = document.getElementById("jump");
let startBtn = document.getElementById("start");
start.addEventListener("click", function(){
    let game = new Game(document.getElementById("game"));
    game.start();
})

