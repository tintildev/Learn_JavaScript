"use strict";

let tbodyAnd = document.getElementById("and").children[1];
let tbodyOr = document.getElementById("or").children[1];

let aValues = [true, false];
let bValues = [true, false];

//Und Tabelle
for (let a of aValues){
    for(let b of bValues){
        //Erstellung von 1 Zeile und 3 Spalten
        let tr = document.createElement("tr");
        
        let td0 = document.createElement("td");
        td0.innerHTML = a;

        let td1 = document.createElement("td");
        td1.innerHTML = b;

        let td2 = document.createElement("td");
        td2.innerHTML = (a && b);

        //Werte hinzufügen zu Zeile
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);

        //Tabellen Body hinzufügen
        tbodyAnd.appendChild(tr);
    }
}

//Oder Tabelle
for (let a of aValues){
    for(let b of bValues){
        //Erstellung von 1 Zeile und 3 Spalten
        let tr = document.createElement("tr");
        
        let td0 = document.createElement("td");
        td0.innerHTML = a;

        let td1 = document.createElement("td");
        td1.innerHTML = b;

        let td2 = document.createElement("td");
        td2.innerHTML = (a || b);

        //Werte hinzufügen zu Zeile
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);

        //Tabellen Body hinzufügen
        tbodyOr.appendChild(tr);
    }
}