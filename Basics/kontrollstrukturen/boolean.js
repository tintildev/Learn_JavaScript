"use strict";

let x = 15;

//Ergebniss ist ein Boolean
let a = x > 10;
let b = x < 20;

console.log(a);
console.log(b);

if (a && b){
    console.log("if wird ausgeführt");
}

//Alternative in einer Zeile
if( x > 10 && x < 20){
    console.log("if wird ausgeführt, Besser");
}

if( x < 10 || x > 20){
    console.log("If-Oder");
}
