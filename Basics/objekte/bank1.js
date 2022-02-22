"use strict";

class BankAccount {
    constructor(balance){
        //Initial
        this._initialBalance = balance;
        //Aufzeichung der Transaktionen
        this._withdraws = [];
    }

    //Abheben
    withdraw(amount){
        if (this.getBalance - amount < 0){
            console.log("Fehler!");
        }else{
            this._withdraws.push(amount);
        }          
    }

    //Aktueller Kontostand
    getBalance(){
        let balance = this._initialBalance;
        for(let withdraw of this._withdraws){
            balance = balance - withdraw;
        }
        return balance;
    }

}

//Konte erstellen
let b = new BankAccount(1000);
b.withdraw(200);
b.withdraw(900);
console.log(b);