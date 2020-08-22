var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
//wird benötigt falls mach gleizeitig links und rechts drückt
var both = 0;

var counter = 0;
var currentBlocks = [];

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
setInterval(() => {
    var blockLast = document.getElementById("block"+(counter-1));
    var holeLast = document.getElementById("block"+(counter-1));

    if(counter>0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    
    //Neue Blöcke nur erstellen wenn letzer durchgelaufen ist.
    if(blockLastTop<400 || counter == 0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole");
        block.setAttribute("id", "block"+counter);
        hole.setAttribute("id", "hole"+counter);

        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";

        //Loch Random Wert
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";

        //Hinzufügen
        game.appendChild(block);
        game.appendChild(hole);

        currentBlocks.push(counter);
        counter++;
    }

    for(var i = 0; i < currentBlocks.length; i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let iblockTop = parseInt(window.getComputedStyle(iblock).getPropertyValue("top"));
        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";
    }

    
}, 1);
