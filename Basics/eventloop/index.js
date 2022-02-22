"use strict";

window.addEventListener("load", function(){

    let a = "Hallo";
    this.setTimeout(function(){
        alert(a);
    }, 1000);
    a = "Welt";

});