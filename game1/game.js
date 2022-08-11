"use strict";

//Zum zeichen
class Renderer{
    constructor(element){
        this.element = element;
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
        this.box.style.top="5px";
        this.box.style.left="20px";
        this.box.remove();
    }

    //Bewegung
    render(position){
        this.box.style.top = position + "px";
    }
}
//Bewegungs Logik
class Box {
    constructor(element){
        this.renderer = new Renderer(element);
        this.position = 0;
        this.speed = 0;

        /**
         * Negativer Speed: Nach oben
         * Positiver Spedd: Nach unten
         */
    }
    restart(){
        this.position = 0;
        this.speed = 0;
        this.renderer.setup();
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
        this.box = new Box(element);
        this.element = element;
        
        //Läuft das Spiel
        this.isRun = true;
        this.setup();
        this.space();
    }

    isRunning(){
        return this.isRun;
    }

    //Klick auf Box
    setup(){
        this.box.renderer.setup();
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
        this.isRun = false;
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
                this.isRun = true;
                //Intervall abbrechen
                clearInterval(timer);
                alert("Oberer Rand erreicht: Gameover, " + counter + " Punkte!");
                this.box.renderer.myRemove();
                this.box.restart()
                console.log(this.box.renderer.position);
            }
            //Unterre Rand
            if(this.box.position + 20 > this.element.clientHeight){
                this.isRun = true;
                //Intervall abbrechen
                clearInterval(timer);
                alert("Unterer Rand erreicht: Gameover, " + counter + " Punkte!");
                this.box.renderer.myRemove();
                this.box.restart()
                console.log(this.box.renderer.position);
            }
        this.box.renderer.render(this.box.position);
        }, 40);
        console.log(timer);
    }
}

//Übergabe des Spielfelds
let jumpBtn = document.getElementById("jump");
let startBtn = document.getElementById("start");
let game = new Game(document.getElementById("game"));
start.addEventListener("click", function(){
    if(game.isRunning()){
        game.start();
    }
})

