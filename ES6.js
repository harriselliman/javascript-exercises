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



//Use Destructuring Assignment to Assign Variables from Arrays
//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a

let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [6, 8];
})();
console.log(a); // 6
console.log(b); // 8



//Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
//Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const[a,b,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // [3,4,5,6,7,8,9,10]
console.log(source); // [1,2,3,4,5,6,7,8,9,10];



//Use Destructuring Assignment to Pass an Object as a Function's Parameters
//Use destructuring assignment within the argument to the function half to send only max and min inside the function

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; 
  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();
console.log(stats); // should be object
console.log(half(stats)); // 28.015



//Create Strings using Template Literals
//Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  const resultDisplayArray = [
    `<li class="text-warning">${arr[0]}</li>`,
    `<li class="text-warning">${arr[1]}</li>`,
    `<li class="text-warning">${arr[2]}</li>`
    ];

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);



//Write Concise Object Literal Declarations Using Simple Fields
//Use simple fields with object literals to create and return a Person object

const createPerson = (name, age, gender) => {
  "use strict";
  return {name, age, gender};
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object



//Write Concise Declarative Functions with ES6
//Refactor the function setGear inside the object bicycle 

const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear); //3




//Use class Syntax to Define a Constructor Function
//Use class keyword and write a proper constructor to create the Vegetable class. The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.

function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => 'carrot'



//Use getters and setters to Control Access to an Object
//1. Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
//2. Now create getter and setter in the class, to obtain the temperature in Celsius scale.

function makeClass() {
  "use strict";
  class Thermostat {
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5/9 * (this.farenheit - 32);
    }
    set temperature(celcius){
      this.farenheit = celcius * 9/5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C