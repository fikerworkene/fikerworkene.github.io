"use strict";
// /* global Account */
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/**
 * A SavingsAccount class
 * 
 * Generates interest based on the interest percentage
 */
class SavingsAccount extends Account {
    /**
     * Constructor for creating a SavingsAccount
     * 
     * @param {number} number the account number
     * @param {number} interest the interest percentage
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    /**
     * Getter
     * 
     * @returns {number} the interest percentage
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for the interest percentage
     * 
     * @param {number} interest percentage
     * @returns {undefined}
     */
    setInterest(interest) {
        this._interest = interest;
    }

    /**
     * Adds interest to the balance
     * 
     * @returns {undefined}
     */
    addInterest() {
        let amount = this._balance * this._interest / 100;
        this.deposit(amount);
    }

    /**
     * @returns {string} representation of the object
     */
    toString() {
        return "SavingsAccount " + this._number + ": balance: " + this._balance +
            " interest: " + this._interest;
    }

    /**
     * At the end of the month add interest to the account
     * @returns {undefined}
     */
    endOfMonth() {
        this.addInterest();
        return "Interest added " + this.toString();
    }
}

exports.SavingsAccount = SavingsAccount;

