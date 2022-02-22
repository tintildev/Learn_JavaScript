"use strict";

let inputText = document.getElementById('inputText');
let inputForm = document.getElementById('inputForm');
let result = document.getElementById('result');
console.log("Start");
inputForm.addEventListener('submit', function(){
    console.log("Start Function");
    var text = inputText.value;
    var temp = text.split(" ");
    //alert("There were " + temp.length + " Words found.")
    result.textContent = "There were " + temp.length + " Words found.";
    inputText.value ="";
})