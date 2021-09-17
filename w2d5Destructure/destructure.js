"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary}; //add all of your function names here that you need for the node mocha tests
// getDateAgo 
/*  Question 1 Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)*/

function getDateAgo() {
  let user = {name: "John",years:30};
  let {name,years:age,isAdmin = false} = user;
  console.log(name);
  console.log(age);
  console.log(isAdmin);

}
getDateAgo();

/*Question 2 Create the function topSalary(salaries) that returns the name of the top-paid person.
If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for(let [key, value] of Object.entries(salaries)){
    if(maxSalary< value){
      maxSalary = value;
      maxName = key;
    }
  }
  return maxName;

  }
  // let salaries = {
  //   "John": 100,
  //   "Pete": 300,
  //   "Mary": 250
  // };
  // console.log(topSalary(salaries))//pete

  
  
