"use strict";
/*eslint-disable*/
function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
   // create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);
/* Question 1 Log to the console the names of everyone in the tree.*/
function printName(tree) {
    if (tree.descendents === null) {
        console.log("name:", tree.value)
    }
    else {

        console.log("name:", tree.value)
        for (let child of tree.descendents) {
            printName(child)
        }
    }
}

console.log(printName(abe));

/* Question 2 Given a target value, return true or false if there is a node in the tree with the target value. E.g.,
contains(tree, “Lisa”) → true
contains(tree, “Crusty”) → false*/
function contains(tree,name){
    if(tree.value===name)
        return true;
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           if(contains(item,name))
               return true;
        }
    }
   return false;
}

console.log( contains(abe,"lisa"));

/*Question 3 Given a target value, return the subtree with the found node or null if no match. Extend the
 tree to have a more interesting test. Create a mocha test to run at least 2 or 3 tests on your tree. findSubtree(tree, “Homer”) → 
 subtree with Homer as the root*/
function getMatchingTree(tree,name){
    if(tree.value===name){
        return tree;
    }
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           let matchingNode = getMatchingTree(item,name);
           if(matchingNode){
                return matchingNode; 
           }
        }
    }
    return null;
}
console.log("getMatchingTree ",getMatchingTree(abe,"Homer"));
//  Question 4 Create a new constructor function ListNode (based on TreeNode below) and use it to generate a 
// linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.

function ListNode(value,next){
    this.value = value;

}
// let lisNode = new ListNode(abe.value)
// let maggieNode = new ListNode("Maggie",null);
// let lisaNode = new ListNode("Lisa",maggieNode);
// let bartNode = new ListNode("Bart",lisaNode);
// let homerNode = new ListNode("Homer",bartNode);
// let abeNode =  new ListNode("Abe",homerNode);


function createlinkedList(abe){

let listNode = new ListNode(abe.value);

listNode.next = new ListNode(homer.value);
listNode.next.next = new ListNode(bart.value);
listNode.next.next.next = new ListNode(lisa.value);
listNode.next.next.next.next = new ListNode(maggie.value);
console.log(JSON.stringify(listNode));
}
createlinkedList(abe);


// Question 5 Given a target value in the list, return the node that contains the target value or null if no match.
// findListNode(list, “Bart”)
function targetValue(tree, name) {
    if (tree.value === name) {
        console.log(tree);
    }
    if (tree.descendents === null) return;
    tree.descendents.forEach(child => targetValue(child, name));
}

let nameValue = "Abe";
targetValue(abe, nameValue);

/* Question 6 Write a recursive function, treeModifier, that will take a tree and a modifier function as
parameters. Walk through the tree and apply the function to each node. The function should
apply the following operations to each node. treeModifier(tree, modiferFunc)
• allCaps(node) will change the value of a node to be all caps.
• addStars(node) will change the value to have *** in front and behind the node value.
• reverseNode(node) will reverse the string of the node value. Abe -> ebA
Call your recursive function with each of these modifier functions.*/

function treeModifier(tree, func) {
        tree.value = func(tree);
        if (tree.descendents === null) {

            return tree;
        } else {
            tree.value = func(tree);
            for (let node of tree.descendents) {

                treeModifier(node, func);

            }
        }
        return tree
    }

    function allCaps(node) {
       console.log(node.value = node.value.toUpperCase());
    }
    function addStars(node) {
        console.log("***" + node.value + "***");
    }
    function reverseNode(node) {
        console.log(node.value.split("").reverse().join(""));
    }
    treeModifier(abe, allCaps); //Cannot read property 'toUpperCase' of undefined
    treeModifier(abe, addStars);
    treeModifier(abe, reverseNode); //Cannot read property 'split' of undefined

    /*Question 9 Write code to illustrate the use of the rest operator
a. In a destructurng assignment
b. In a function call*/
function addNumbers(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let total = addNumbers(3, 2, 4, 6);
console.log(total);

// rest in destructuring assignment.

let [num1, num2, ...rest] = [10, 20, 30, 40];

console.log(rest) //[30, 20]


