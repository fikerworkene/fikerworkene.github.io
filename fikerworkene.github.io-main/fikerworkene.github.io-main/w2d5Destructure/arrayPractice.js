"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge,includesEvenNum,includesEvenAge}; //add all of your function names here that you need for the node mocha tests
const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
 "Barney", age: 80}]

function doubleNums(arr){
 return arr.map(value => value * 2);
 
}

function doubleAges(arr){
    return arr.map(value => {(value)
        let newAge = {};
        newAge.age = value.age * 2;
        newAge.name = value.name;
        return newAge;
    });

}

function filterEven(arr){
    return arr.filter(value => value%2==0)
     

}

function filterOver10(arr) {
   return  arr.filter(item=> item.age>10)

}

function findEvenNum(arr){
    return arr.find(value => value%2 == 0)

}

function findEvenAge(arr){
    return arr.find(value => value.age%2==0)

}

function includesEvenNum(arr){
   let num = arr.find(item => item%2===0);
   return arr.includes(num);

}

function includesEvenAge(arr){
    return arr.includes(item => item.age%2===0);
    
}
/* this functions are no mocha */
// function findSumOfNumber(arr){
//     console.log( arr.reduce(function(sum,current){
//         return sum+current;
//     },0));

// }
// findSumOfNumber([5,0, 7, 77, -20, 300, 51, 2])//422
// function findAverageOfNumber(arr){
//     let ars =  arr.reduce(function(sum,current){return sum+current;
//     },0);
//     console.log( ars/arr.length);

// }
// findAverageOfNumber([5,0, 7, 77, -20, 300, 51, 2])//52.75

// function findMaxOfNumber(arr){
//     console.log(arr.reduce(function(a,b){
//         return Math.max(a,b);},0))
// }
// console.log(findMaxOfNumber([5,0, 7, 77, -20, 300, 51, 2]))
// function findMaxForAge(){
//           let arr = peopleArray.map(person => person.age);
//     return arr.reduce((item,current) => Math.max(item , current), 0);
//     }
//     console.log(findMaxForAge());
    
// function averageEven(){
//        let arr1 = peopleArray.map(item1 => item1.age).filter(item2 => item2%2===0);
//       let arr2 = arr1.reduce((sum, current) => sum + current, 0)/arr1.length;
//             return arr2;
//     }
//     console.log(averageEven());
    
// function averageOdd(){
//     let arr1 = peopleArray.map(item1 => item1.age).filter(item2 => item2%2!==0);
//     let arr2 = arr1.reduce((sum, current) => sum + current, 0)/arr1.length;
//     return arr2;
//     }
//     console.log(averageOdd());
    

