"use strict";

//Klasse
class Person{


    //Constructor
    constructor(firstName, lasteName, age){
        console.log("constructor wurde ausgeführt");
        this.firstName = firstName;
        this.lasteName = lasteName;
        this.age = age;
    }

    //Funktion für die Klasse
    printPerson(){
        console.log("printPerson wurde ausgeführt " + this.firstName);
    }
}
//Erstelle aus der Klasse(Muster) eine neue Instanz
let max = new Person("Max", "Muster", 24);
max.printPerson();