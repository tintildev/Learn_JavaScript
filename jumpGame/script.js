let character = document.getElementById("character");
let block = document.getElementById("block");
let jumpBtn = document.getElementById("jump");
let startBtn = document.getElementById("start");


//Beim Klicken Animation hinzufügen und nach 500ms löschen.
let jump = function(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);

}
//Alle 10 Sekunden Checken wo die Position ist.
let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 100){
        block.classList.remove("block-animate");

        alert("Verloren");
    }
},10)

//Space
document.addEventListener('keyup', event => {
    if (event.code === 'Space'){
        jump();
    }
});

//Start
startBtn.addEventListener("click",function(){
    jumpBtn.addEventListener("click", jump);
    block.classList.add("block-animate");
})


    


