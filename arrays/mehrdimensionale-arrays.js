"use strict";

//Mehrdimensionales Array
let persons = [
    ["Andreas", "Paula"],
    ["Erik", "Monika"],
];

console.log(persons);

//Zugriff auf 1 Element, 1 Wert -> Andreas
console.log(persons[0][0]);

//For Schleife
for(let cours of persons){
    for(let person of cours){
        console.log(person);
    }
    console.log(cours);
}