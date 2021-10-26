"use strict";
/*eslint-disable*/
/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci,printListRecursion,printListLoop,printReverseList,printReverseListLoop}; //add all of your function names here that you need for the node mocha tests


   //• Sum all numbers till the given one
  /**
   * 
   * @param {number} n sum all numbers 
   * @returns {number} return num
   */
   function sumTo(n) {
    if (n == 1){
        return 1;
    }
        return n + sumTo(n - 1);
}

  
//• Calculate factorial
/**
 * 
 * @param {number} x factorial number
 * @returns {number} return num
 */
function factorial(x) {
  if (x === 1) {
      return 1;
  }
  return x * factorial(x - 1);

}
console.log(factorial(6));

//Fibonacci numbers
/**
 * @param {number} n number
 * @returns {number} return number
 */ 
function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
  }

  let list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
//Using recursion
function printListRecursion(list) {
    if (!list) return;
    console.log(list.value);
    printListRecursion(list.next);
}

//Using Loop.

function printListLoop(list) {

    while (list) {
        console.log(list.value);
        list = list.next;
    }
    return;
}

printListRecursion(list1); // 1,2,3,4
printListLoop(list1); //1,2,3,4
//Using recursion
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}

//Using Loop.

function printReverseListLoop(list) {
    let arr = []
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    for (let value of arr.reverse()) {
        console.log(value)
    }
}
printReverseListLoop(list1);//4,3,2,1
printReverseList(list1);//4,3,2,1
