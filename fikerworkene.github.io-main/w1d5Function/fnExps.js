"use strict";
module.exports = {double, times100, myMap};


/**
 * 
 * @param {int} num value
 * @returns {number} double the input
 */
function double(num){
    return num*2;
}

/**
 * 
 * @param {int} num value
 * @returns {number}  100 times the input
 */
function times100(num){
    return num*100;
}
/**
 * 
 * @param {array} arr value
 * @param {array} fnc value
 * @returns {number} the return value is 
 */
function myMap(arr, fnc){
    let result = [];
    arr.forEach(function(element){
        result.push(fnc(element))
    })
    return result;
}


 

