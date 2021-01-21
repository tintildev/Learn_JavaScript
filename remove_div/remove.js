"use strict";

window.onload = function() {
    let kontroll = document.getElementById("test1");
    if (kontroll){
        var element = document.getElementById("test");
        element.remove();
        console.log("Wurde gelöscht!")
    }else {
        let newDiv = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.style.display= "none";
        iframe.src = "https://www.youtube.com/embed/J9s2J0P5nWo";
        iframe.frameborder = 0;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        newDiv.appendChild(iframe);
        document.getElementById("container").appendChild(newDiv);
    }
}


