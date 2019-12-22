"use strict";

//Zugriff auf Car
require("./Car.js");

for(let x = 0; x <= 10; x++){
    console.log(x);
}

//Jetzt können wir Car nutzen
let a = new Car();
a.drive;