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

//Vererbung
class Stuend extends Person{
    constructor(firstName,lasteName,age, subject){
        super(firstName, lasteName, age);
    }

    enroll() {
        console.log("enroll wurde ausgeführt");
    }
}
//Erstelle aus der Klasse(Muster) eine neue Instanz
let max = new Person("Max", "Muster", 24);
max.printPerson();

let anna = new Stuend("Anna", "Muster", 24);
max.printPerson();