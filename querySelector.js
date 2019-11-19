"use strict";

window.addEventListener("load", function() {

    let heading = document.getElementById("heading");
    heading.addEventListener("click", function() {
        var item = document.querySelector(".panel .alert")
        item.style.color = "red";

    }, false);

}, false); 