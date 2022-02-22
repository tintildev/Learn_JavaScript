"use strict";

window.addEventListener("load", function() {

    let counter = 0;
    let button = document.getElementById("button");

    let counterValue = document.getElementById("counter");
    counterValue.innerText = counter;

    button.addEventListener("click", function(){
        counter = counter + 1;
        counterValue.innerText = counter;
    })

});