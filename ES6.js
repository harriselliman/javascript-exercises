//arrow functions with parameters

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  }
  
console.log(myConcat([1,2], [3,4,5]));



//write higher order arrow functions
//use arrow function syntax to compute the square of only the positive integers in the array and store the new array in the variable squaredIntegers

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";

  const squaredIntegers = arr.filter((num) => num > 0 && num % 1 == 0).map((num) => num*num);

  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



//set Default Parameters for Your Functions
//modify increment by adding default parameter so it adds 1 to number if value is not specified.

const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6



//Use the Rest Operator with Function Parameters
//modify sum function to use rest operator so it works with any number of parameters

const sum = (function() {
  "use strict";
  return function sum(...args) {
   return args.reduce((a, b) => a + b, 0);
  };
})();
  
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55


  
//Use the Spread Operator to Evaluate Arrays In-Place
//Copy all contents of arr1 into another array arr2 using the spread operator

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();

console.log(arr2); //returns ['JAN', 'FEB', 'MAR', 'APR', 'MAY']



//Use Destructuring Assignment to Assign Variables from Objects
//Use destructuring to obtain the average temperature for tomorrow from the input object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow : tempOfTomorrow } = avgTemperatures; 
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79




//Use Destructuring Assignment to Assign Variables from Nested Objects
//Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow : {max : maxOfTomorrow }} = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // 84.6