"use strict";
const assert = require("assert");
module.exports={maxOfThree, sumNumbers, multiplyNumbers, findLongestword,reverseArray,reverseArrayInPlace,scoreExams};
/**
 * 
 * @param {int} num1 first number
 * @param {int} num2 second number
 * @param {int} num3 threed number
 * @returns {Number} maximum nuber of three parameter
 */
function maxOfThree(num1, num2, num3) {
    let max = num1;
    if (max > num2 && max > num3) {
        return max;
    }
    else if (num2 > num3 && num2 > max) {
        return num2;
    }
    else return num3;
}

/**
 * @param  {Array} array the numbers
 * @returns {number} the sum of numbers
 */
function sumNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
/**
 * @param  {Array} array the numbers
 * @returns {number} the multiplied value of numbers
 */
function multiplyNumbers(array) {
    let multiply = 1;
    for (let i = 0; i < array.length; i++) {
        multiply *= array[i];
    } return multiply;
}
/**
 * 
 * @param {Array} arr number
 * @returns {Number} the longest string
 */
function findLongestword(arr) {
    let longestWord = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (longestWord < arr[i].length) {
            longestWord = arr[i].length;
        }
    }
    return longestWord;
}

/**
 * 
 * @param {array} array number 
 * @returns {Number} return reverse array
 */
  function  reverseArray(array) {
    let reversed = [];
    for (let i = 0; i < array.length; ++i) {
      reversed[i] = array[array.length - (i + 1)];
    }
    return reversed;
  }
  /**
   * 
   * @param {array} array value
   * @returns {Number} reverse number
   */
  function reverseArrayInPlace(array) {
      let temp = [];
      for (let i = 0; i < array.length; i++) {
        temp.unshift( array[i]);
              }
             for(let i =0;i<array.length;i++){
                 array[i]=temp[i];
             }
      return array;
    }
    
/**
 * 
 * @param {int} studentAnswer  score
 * @param {int} correctAnswers scor
 * @returns {Number} coorect score
 */
  function scoreExams(studentAnswer, correctAnswers) {
    let score = [];
    for (let eachAnswer of studentAnswer) {
        let answer = 0;
        for (let i = 0; i < eachAnswer.length; i++) {
            if (eachAnswer[i] === correctAnswers[i])
                answer++;
        }
        score.push(answer);
    }
    return score;
}



