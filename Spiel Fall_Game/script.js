var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
//wird benötigt falls mach gleizeitig links und rechts drückt
var both = 0;

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    //Rand Begrenzung
    if(left>0){
        character.style.left = left - 2 +"px";
    }
    
}

function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    if(left<380){
        character.style.left = left + 2 +"px";
    }
}

document.addEventListener("keydown", event =>{
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            console.log("test left");
            interval = setInterval(moveLeft, 1);
        }
    
        if(event.key==="ArrowRight"){
            console.log("test right");
            interval = setInterval(moveRight, 1);
        }
    }

});

document.addEventListener("keyup", event =>{
    clearInterval(interval);
    both=0;
});


//Blöcke erstellen
var block = document.createElement("div");
var hole = document.createElement("div");
block.setAttribute("class", "block");
hole.setAttribute("class", "hole");
block.setAttribute("id", "block");
hole.setAttribute("id", "hole");

//Loch Random Wert
var random = Math.floor(Math.random() * 360);
hole.style.left = random + "px";

//Hinzufügen
game.appendChild(block);
game.appendChild(hole);