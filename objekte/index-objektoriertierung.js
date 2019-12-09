"use strict";
//Funktion
let printPerson = function(){
    console.log(this.firstname + this.lastname);
}


//Objekt
let person = {
    firstname: "Max",
    lastename: "Mustermann",
    age: 24,

    //Funtkion in Objekt
    printPerson: printPerson,

    //Funktion in Objekt defeniert
    printPerson2 = function(){
        console.log(this.firstname + this.lastname);
    }
};