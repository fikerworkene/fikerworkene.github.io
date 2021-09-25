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
        let number = Bank.nextNumber++;
        this._accounts.push(new Account(number));
    }
    /**
     * @param {number} interest interest
     * @returns {number} the number of the created account
     */
    addSavingsAccount(interest) {
        let number = Bank.nextNumber++;
        this._accounts.push(new SavingsAccount(number, interest));
    }


    /**
     * @param {number} overdraft overdraft amount
     * @returns {number} the number of the created account 
     */
    addCheckingAccount(overdraft) {
        let number = Bank.nextNumber++;
        this._accounts.push(new CheckingAccount(number, overdraft));
    }

    /**
     * @param {number} number of the account to be closed
     * @returns {undefined}
     */
    closeAccount(number) {
        let idx = this._accounts.findIndex((element) => {
            return element.getNumber() === number;
        });
        this._accounts.splice(idx, 1);
    }

    /**
     * @returns {string} the report
     */
    accountReport() {
        let report = "";
        for (const act of this._accounts) {
            report += act.toString() + "\n";
        }
        return report;
    }

    /**
     * @returns {string} the report
     */
    endOfMonth() {
        let report = "";
        for (const act of this._accounts) {
            let msg = act.endOfMonth();
            if (msg !== "") {
                report += msg + "\n";
            }
        }
        return report;
    }
}

Bank.nextNumber = 1;


exports.Bank = Bank;





