"use strict";

class BankAccount {
    constructor(balance){
        //JavaScript vorgabe, this Variable soll der Name mit _ beginnen. Damit man nicht von außen darauf zugreift (Datenkapselung).
        this._balance = balance;
    }

    //Abheben
    withdraw(amount){
        let newBalance = this._balance - amount;
        if (newBalance < 0){
            alert("Diese Abhebung darf nicht durchgeführt werden!");
        } else{
            this._balance = this.balance - amount;
        }
        
    }

}

//Konte erstellen
let b = new BankAccount(1000);
b.withdraw(200);
b.withdraw(900);
console.log(b);