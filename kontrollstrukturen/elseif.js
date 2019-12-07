"use strict";

let getInhabitants = function(city){
    if(city == "Berlin"){
        return 2500000;
    } else if(city =="Köln"){
        return 1500000;
    }
}

console.log(getInhabitants("Berlin"));
console.log(getInhabitants("Köln"));