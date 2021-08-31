/*Question 1
*/
let sales = 550;
let salesMan="salaried";
if(salesMan == 'salaried'){
    if(sales < 300){
        console.log("no commission");
    }else if(sales > 300 && sales < 500){
            console.log(0.01*sales);
        }else (sales > 500 );
            console.log(0.02*sales);
        
}else {
    if(sales > 300 && sales < 500){
        console.log(0.02*sales);

    }else console.log(0.03*sales);
}

/*Question2
Write a loop that continually prompts for age until you enter 
age older than 18
• Write both while and do while versions.
*/

let prompt = require("prompt-sync")();
let age;
do{
    age = prompt("Enter your age: ");
    console.log("your age is: " +  age)
}
while(age < 19);
console.log("exiting");

/*Question3
Make a defining table and program to print out the balance of 
a savings account that compounds interest monthly. Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound
*/
let prompt = require("prompt-sync")();
let initialamount = prompt("Enter initial amount: ");
let numOfYearToCompound = prompt("Enter number of years to compound: ");
let intersetRate = prompt("Enter interest rate: ");
let totalAmount = initialamount*Math.pow(1+ (intersetRate/12),12*numOfYearToCompound);
let interest = totalAmount - initialamount;
console.log("after " + numOfYearToCompound +" years = " + totalAmount);
console.log("compound interest after " + numOfYearToCompound +" years =" + interest);

/*Question 4
Write code to print the number patterns on 
the console
*/
let n =5;
for (let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1;j <= n;j++){
        row += j;
    }
    console.log(row);
}
let n =5;
for (let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1;j <= i; j++){
        row += i;
    }
    console.log(row);
}
let n =5;
for (let i = 5; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += i;
    }
    console.log(row);
}

/*Question 5
write a program that calculates down payment for a home loan based
on following rules. Your program should prompt for the cost and 
write the down payment amount to the console.
*/
let prompt = require("prompt-sync")();
 let costOfHouse = prompt("Enter cost of house: ");
if( costOfHouse <= 50000){
    console.log(costOfHouse*0.05);
}else if( costOfHouse <= 100000){
        console.log(1000 + 0.1*(costOfHouse - 50000));

}else if( costOfHouse <= 200000){
            console.log(2000 + 0.15*(costOfHouse - 100000));
}else (costOfHouse > 200000)
     console.log(5000 + 0.1*(costOfHouse - 200000));
            
/*
 Question 6
Write a JavaScript program to prompt for an integer and 
compute the sum of all the digits.
*/
let prompt = require("prompt-sync")();
let sum =0;
let x = prompt("Enter any integer numbers: ");
     for(let i = 0; i <= x.length; i++){
     sum += Number(x.charAt(i));
 }
 console.log(parseInt(sum));



