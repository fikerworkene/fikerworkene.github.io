"use strict";
let ps = require("Prompt-sync");
let prompt = ps();
let name = prompt("Enter your name : ");
console.log(`Hello ${name};`)

let x = 5;
let y = '7';
let test = true;
let result = x + y;
console.log(result);//57
console.log(typeof result);//string

let a = x + test;
console.log(a);//6
console.log(typeof a);// number

let b = test + y;
console.log(y);//7
console.log(typeof b);// string

let c = y * 2;
console.log(c);//14
console.log(typeof c);//number
console.log(2-9+8-6+5);//0
console.log(2-9+8-6*5);//-29
let count1 = 4;
let count2 = 8;
console.log(++count1);//5
console.log(count2++);//8
console.log(--count1);//4
console.log(count2--);//9

Exercise
let pro = require('prompt-sync')();
let tempCels = pro('Enter value in celsius: ');
let tepFahr = 9/5*(tempCels)+32;
console.log(tepFahr);//4  //39.2

let radius = 3;
let height = 4;
let volume = Math.PI*(Math.pow(radius, 2)*height);
console.log(volume);//113.09

//ask user
let pro = require('prompt-sync')();
let radius = pro('Enter the value of radius: ');
let height = pro('Enter the value of height: ');
let volume = Math.PI*(Math.pow(radius,2)*height);
console.log(volume);

//if statement
let day_of_week = 7;
let weather = "sunny";

console.log("first line");
if(day_of_week < 5){
	console.log("sleep till noon");
}
console.log("after first if");

if(day_of_week > 6 && weather === "sunny"){
	console.log ("lets go for swimming");
}

console.log("after second if");

exercise
let pro = require('prompt-sync')();
let age = pro("Enter your age");

if(age <= 0){
    console.log("please enter valid age");
}else{
    if(age<0 && age<14){
        console.log("you can't drive yet.")
    }else{
        if(age <15 && age <18){
            console.log("you can drive under supervision")
        }else
        if(age > 19){
            console.log("you can drive.")
        }
    }
}
let n =5;
for (let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1;j <= n;j++){
        row += i + " " ;
    }
    console.log(row);
}