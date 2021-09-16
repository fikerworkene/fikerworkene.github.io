"use strict";
/*eslint-disable*/


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


