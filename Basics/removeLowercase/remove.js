const start = document.getElementById('btnStart');
const removData = ["a", "e", "i", "o", "u"];

let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');
let t4 = document.getElementById('t4');

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
const testData = ["hello", "codewars", "goodbye", "HELLO", "naiay" ];

console.log(testData);

start.addEventListener('click', ()=>{
    for(i = 0; i < testData.length; i ++){
        testData[i] = testData[i].replace(/[aeiou]/g, '');
        console.log(testData[i]);
    }
    t1.innerHTML = testData[0];
    t2.innerHTML = testData[1];
    t3.innerHTML = testData[2];
    t4.innerHTML = testData[3];
});

