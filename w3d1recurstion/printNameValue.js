"use strict";
/*eslint-disable*/

/*Output a single-linked list.
Using recursion and using loop.*/
let list = {
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

printListRecursion(list); // 1,2,3,4
printListLoop(list); //1,2,3,4
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
printReverseListLoop(list);//4,3,2,1
printReverseList(list);//4,3,2,1
//question part II
let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null
};

let node4 = {
  name: "label",
  value: "Name",
  children: null
};

let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null
};

let node2 = {
  name: "div",
  value: null,
  children: [node4, node5]
};

let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

function printNameRecursive(obj) {
  console.log(obj.name + ": " + obj.value);
  if (obj.children === null) return;
  obj.children.forEach(child => {
    printNameRecursive(child);
  })
}
printRecursive(node1)
/*
body: null
div: null
label: Name
input: this was typed by a user
p: This is text in the a paragraph
*/


