"use strict";

let students = [
    "Max",
    "Eva",
    "Chris",
    "Paual"
];

//Continue
for(let student of students){
    if(student == "Chris"){
        continue;
    }
    console.log(student);
}


//Break
let inArray = false;
for(let student of students){
    if(student == "Max"){
        inArray = true;
        //Bricht die Schleife ab
        break;
    }
}