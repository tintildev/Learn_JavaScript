"use strict";

window.onload = function() {
    let temp = "kontroll"
    let kontroll = document.getElementsByClassName(temp);
    if (kontroll.length > 0){
        var element = document.getElementById("container");
        element.remove();
		console.log("Remove wurde ausgeführt!")
    }
}


