"use strict";
/*eslint-disable*/
// You need the module.exports when testing in node.  Comment it out when you send your file to the browser 

module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests
let arr = [3, 6, 9, 20];
let arr2 = [4, 10, 20];
let obj = { x: 1, y: { a: 1, b: 2 } };
let obj1 = { x1: 2, y1: { a: 2, b: 3 } };
function copyArray(arr){
    let copy = [...arr];
    return copy;

}

function concat(arr, arr2){
    let concatArr = arr.concat(arr2);
    return concatArr;

}

function findMin(...arr) {
    let min = Math.min(...arr);
    return min;

}

function combineObjs(obj, obj1){
    let combine = {...obj, ...obj1 };
    return combine;

}