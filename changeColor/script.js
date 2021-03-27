"use strict"

var colors =['red', 'blue', 'green', 'black', 'grey'];

function colorChange() {
let button = document.getElementById('btn');
let tempDiv = document.getElementById('colorDiv');

button.addEventListener('click', function(){
    let tempColor = colors[Math.floor(Math.random() * colors.length)];
    tempDiv.style.backgroundColor = tempColor;
})



}

colorChange();