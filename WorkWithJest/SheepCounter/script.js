"use strict";

const counter = require('./counter');

const sheeps = document.getElementById("sheeps");
let number = counter.countSheeps();

sheeps.innerHTML = number;
console.log(number);


