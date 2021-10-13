"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate , camelize,checkSpam,extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
  let firstElem = str.charAt(0).toUpperCase();
  return firstElem + str.slice(1)
 
  }

  function checkSpam(str) {
    let lowecaseStr = str.toUpperCase();
    return lowecaseStr.includes("VIAGRA")|| lowecaseStr.includes("XXXX")
 
  }


  function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;

  }

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0; 
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}
function extractCurrencyValue(str){
  let word = str.slice(1);
  let currency = parseInt(word);
  return currency;
}

function camelize(str) {
  let array = str.split("-");
  return array.reduce(function(finalStr,current,index){
  if(index == 0)
  return current;
  return finalStr + ucFirst(current);
},"");
  }
 