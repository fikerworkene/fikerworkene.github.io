"use strict";
const assert = require("assert");
module.exports={isVowel, computeCommission, calcDownpayment,convertFahrenheit,calcDistance,compoundInterest};

/**
 * 
 * @param {String} str 
 * @returns {Boolean} true or false
 */
function isVowel(str) {
   if( str === "a" || str === "e" || str === "i" 
   || str === "o" || str === "u"){
       return true;
   }else
    return false;
}
    

/**
 * 
 * @param {Boolean} salaried - true or false
 * @param {int} sales 
 * @returns {Number} test salse
 */
function computeCommission(salaried, sales) {
    if (salaried == true) {
      if (sales < 300) {
        return 0;
      } else if ( sales <= 500) {
        return sales * 0.01;
      } else 
          return sales*0.02;
    } else {
      if (sales < 300) {
        return 0;
      }else if ( sales <= 500) {
        return  sales * 0.02;
      } else 
        return sales * 0.03;
      }
    }

/**
 * 
 * @param {int} initialAmount 
 * @param {int} numOfYearsToCompound 
 * @param {int} interestRate 
 * @returns {Number} test compound interest
 */
function compoundInterest(initialAmount, numOfYearsToCompound,interestRate ){
    let totalPayment = initialAmount*(1+ (interestRate/100)/12)**(12*numOfYearsToCompound);
    return totalPayment;
  } 
  
/**
 * 
 * @param {int} cost 
 * @param {Number} test calculate down payment
 */
function calcDownpayment(cost) {
    
    if (cost < 0) return;
    if (cost < 50000) {
      return  0.05 * cost;
    } else if (cost < 100000) {
      return 2500 + 0.1 * (cost - 50000);
    } else if (cost < 200000) {
      return 7500 + 0.15 * (cost - 100000);
    } else if (cost >= 200000) {
      return 5000 + 0.1 * (cost - 200000);
    }
   
  }
   
      /**
       * 
       * @param {int} tempFahrenheit 
       * @returns {}
       */  
      function convertFahrenheit(tempFahrenheit){
         let tempCelsius =(tempFahrenheit - 32)*(5/9); 
         return tempCelsius;
        }

        /**
         * 
         * @param {*} x1 
         * @param {*} y1 
         * @param {*} x2 
         * @param {*} y2 
         * @returns 
         */
            function calcDistance(x1,y1,x2,y2){
                 let distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
                 return distance; 
              }
              


        




