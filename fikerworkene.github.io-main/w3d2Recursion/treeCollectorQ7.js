"use strict";
/*eslint-disable*/
/*Question 7 Write a recursive function, treeCollector(tree) that will walk the tree and collect the values of
each node into an array [“Abe”, “Homer”, “Bart”, “Lisa”, “Maggie”] for this tree. You may want
to use an accumulator variable that is external to the function to hold the values.*/

let lisa = { name: "Lisa", next: null }
let berta = { name: "Berta", next: null }
let maggie = { name: "Maggie", next: null }
let hommer = { name: "Hommer", next: [maggie, berta, lisa] }
let abe = { name: "Abe", next: hommer }
console.log(abe);

function linkedlist(arg) {
    let x = arg.name;
    let z = arg.next;
    if (z === null) {
        return x
    }
    else {
        for (let y in arg.name) {
            linkedlist(y)

        }
    }
    return x, z;
}
console.log(linkedlist(abe));