//function calling other function
/*
function cutFruitPieces (fruit){
    return fruit * 4;

};
function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pice of apple and ${orangePieces } pice of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));*/
/*
let calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage(3,4,5));
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);
let checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log('no team wins..');
    }
    }

checkWinner(scoreDolphins.scoreKoalas);
checkWinner(57, 111);*/

/*let friends = ['fiker', 'luwam','mullu'];
console.log(friends[friends.length - 1]);//mullu
console.log(friends);//[fiker,luwam,mullu]
console.log(friends.length);//3
friends[2] = 'star';
console.log(friends);//[fiker, luwam, star]
let firstName = 'ff';
let x = [firstName, 'ww', 1998-2021, 'teacher',friends];
console.log(x);//[ 'ff', 'ww', -23, 'teacher', [ 'fiker', 'luwam', 'star' ] ]
let calcAge = function(birthyeahr){
    return 1998 - birthyeahr;
}
let year = [1990, 1967, 1991]
let age1 = calcAge(year[0]);
let age2 = calcAge(year[1]);
let age3 = calcAge(year[year.length-1]);
console.log(age1, age2, age3);//8 31 7
let age = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length-1])];
console.log(age);//[ 8, 31, 7 ]*/
/*
//add element
let friends = ['fiker', 'luwam', 'mullu'];
let newLength = friends.push('abc');
console.log(newLength);//4
friends.unshift('star');
console.log(friends);//[ 'star', 'fiker', 'luwam', 'mullu', 'abc' ]
// remove elements
friends.pop();
let poped = friends.pop();
console.log(poped);//mullu
console.log(friends);//[ 'star', 'fiker', 'luwam' ]*/
/*
let calcTip = function(bill){
    return bill >= 50 && bill<=300 ? bill *0.15 : bill * 0.2;
}
let bills =[125, 555,44];
let tips = [calcTip(bills[0]), calcTip(bills[1]) , calcTip(bills[2])];

let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills,tips,totals);
 */ 
let Prompt = require("Prompt-sync")();
let name = Prompt("what is your name?:");
console.log(`hi${name}`);
