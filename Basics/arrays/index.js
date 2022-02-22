"use strict";

//First Array
let persons = [
    "Erik",
    "Monika"
];
console.log(persons);

// New person
persons.push("Paula");
console.log(persons);

//Große von Array
console.log(persons.length);

//Zugreifen
console.log(persons[0]);

//Element am Anfang hinzufügen
persons.unshift("Andrew");

//Elemente entfernen (am Ende)
persons.pop();

//Element am anfang entfernen
persons.shift();

//Bei Schift wird das Element entfernt aus dem Array, kann aber in einer Variable gespeichert werden
let removePerson = persons.shift();