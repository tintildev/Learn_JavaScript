var character = document.getElementById("character");
var block = document.getElementById("block");

//Beim Klicken Animation hinzufügen und nach 500ms löschen.
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);

}
//Alle 10 Sekunden Checken wo die Position ist.
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 100){
        block.style.animation ="none";
        block.style.display ="none";
        alert("Verloren");
    }
},10)