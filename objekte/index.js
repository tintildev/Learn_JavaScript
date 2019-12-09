"use strict";

//Objekt
let person = {
    firstname: "Max",
    age: 24
};

console.log(person);

//Zugriff aufs Objekt
console.log(person.firstname);
console.log(person["firstname"]);

//Hinzufügen
person.nachname ="Muster";

//Löschen
delete person.nachname;
