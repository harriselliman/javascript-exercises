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