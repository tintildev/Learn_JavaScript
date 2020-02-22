"use strict";

window.addEventListener("load", function() {

    let heading = document.getElementById("box__heading");
    heading.addEventListener("click", function() {
        let itemList = document.getElementById("items");
        
        let newElement = document.createElement("li");
        newElement.innerText = "Orange";
        newElement.style.color ="orange";

        itemList.appendChild(newElement);

    }, false);

}, false); 