/*
Question 1
Write a function, computeSalesCommission that takes a Boolean argument for salaried and
number argument for salesAmount. It should return the sales commission based on following
rules. First make a defining table for the function.
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (inclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (inclusive)
• 3% for sales above $500 
*/
function computeSalesCommision(salaried, sales) {
    if (salaried == true) {
      if (sales < 300) {
        console.log(0);
      } else if ( sales <= 500) {
        console.log(sales * 0.01);
      } else 
          console.log(sales*0.02);
    } else {
      if (sales < 300) {
        console.log(0);
      }else if (sales > 300 && sales < 500) {
        console.log( sales * 0.02);
      } else 
        console.log( sales * 0.03);
      }
    }
  
  computeSalesCommision("expect 0: ",true, 200);
  computeSalesCommision("expect 0: ",false, 200);
  computeSalesCommision("expect 3: ",true, 300);

/*
Question 2
Make a defining table and function that will return the balance of a savings account that
compounds interest monthly. Parameters for the function will be:
• initial amount
• annual interest rate
• number of years to compound
*/
function compoundInterest(initialAmount, numOfYearsToCompound,interestRate ){
  let totalPayment = initialAmount*(1+ (interestRate/100)/12)**(12*numOfYearsToCompound);
  return totalPayment;
} 
console.log("expect 110.47: ",compoundInterest(100,10,1));

/*
 Question 3
write a function that calculates down payment for a home loan based on
following rules. Your function should have a parameter for the 
cost and return the down payment amount.
 */
function calculateDownPayment(cost){
    if (cost < 50000) {
      console.log( 0.05 * cost);
    } else if (cost < 100000) {
      console.log = 1000 + 0.1 * (cost - 50000);
    } else if (cost < 200000) {
      console.log (2000 + 0.15 * (cost - 100000));
    } else if (cost >= 200000) {
      console.log (5000 + 0.1 * (cost - 200000));
    }
  }
  calculateDownPayment("expect 2000: ", 40000);

  /*
  Question 4
  Write functions sumDigits and multDigits that take an integer parameter 
  and return the sum or product of the digits in the number. Use the / and % operators to find the digits.
  */
  function sumDigits(num) {
    let sum = 0;
    let number = String(num);
    for (let i = 0; i < number.length; i++) {
      sum += Number(number.charAt(i));
    }
    return sum;
  }
  console.log("expect 10: ", sumDigits(1234));
   function multDigits(num){
     let product = 1;
     let number = String(num);
     for(let i = 0; i < number.length;i++){
       product *= Number(number.charAt(i));
      }
      return product;
   }
   console.log("expect 24: ", multDigits(1234));
 
/*
Question 5
Write a function, convertFahrenheit, that takes an input parameter 
with a temperature in Fahrenheit and returns the temperature in Celsius.
 */
function convertFahrenheit(tempFahrenheit){
 let tempCelsius =(tempFahrenheit - 32)*(5/9); 
 return tempCelsius;
}
console.log("expect 0: ",convertFahrenheit(32));
console.log("expect -17.7778: ",convertFahrenheit(0));

/*
Question 6
Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
*/
function calcDistance(x1,y1,x2,y2){
   let distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
   return distance; 
}
console.log("expect 5 : ",calcDistance(0,0,5,5));


   
  

