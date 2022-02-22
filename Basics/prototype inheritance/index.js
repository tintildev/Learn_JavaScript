"use stricte";

//Vor ES6 gab es keine Klassen
let student = {
    age: 25,
    getFullName: function(){
        alert(this.firstname + " " + this.lastname);
    }
}

let max = {
    firstname: "Max",
    lastname: "Mustermann",
    age: 24
};

/** 
    //Zum Verbinden
    for (let i in student){
        console.log(i);
        //Kopieren der Funktion in max hinein.
        max[i] = student[i];
    }
*/

//Bessere möglichkeit
max.__proto__ = studen;

console.log(max);
max.getFullName();

//Es wird das max age verwendet
console.log(max.age);

