"use strict";
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 


/**
 * The Bank class 
 * 
 * Holds an array of accounts
 */
class Bank {
    /**
     * Constructor for the Bank class
     */
    constructor() {
        this._accounts = [];
    }

    /**
     * @returns {number} the number of the created account
     */
    addAccount() {
        let num = Bank.nextNumber++;
        this._accounts.push(new Account(num));
    }
    /**
     * @param {number} interest interest
     * @returns {number} the number of the created account
     */
    addSavingsAccount(interest) {
        let num = Bank.nextNumber++;
        this._accounts.push(new SavingsAccount(num, interest));
    }


    /**
     * @param {number} overdraft overdraft amount
     * @returns {number} the number of the created account 
     */
    addCheckingAccount(overdraft) {
        let num = Bank.nextNumber++;
        this._accounts.push(new CheckingAccount(num, overdraft));
    }

    /**
     * @param {number} number of the account to be closed
     * @returns {undefined}
     */
    closeAccount(number) {
        let id1 = this._accounts.findIndex((item) => {
            return item.getNumber() === number;
        });
        this._accounts.splice(id1, 1);
    }

    /**
     * @returns {string} the report
     */
    accountReport() {
        let resalt = "";
        for (const act of this._accounts) {
            resalt += act.toString() + "\n";
        }
        return resalt;
    }

    /**
     * @returns {string} the report
     */
    endOfMonth() {
        let resalt = "";
        for (const act of this._accounts) {
            let msg = act.endOfMonth();
            if (msg !== "") {
                resalt += msg + "\n";
            }
        }
        return resalt;
    }
}

Bank.nextNumber = 1;


exports.Bank = Bank;





