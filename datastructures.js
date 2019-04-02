//Use an Array to Store a Collection of Data
//Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean

let yourArray = [1, true, 'three', 4, false, {five: 5, six: "six"},[7, "eight", 9]];




//Access an Array's Contents Using Bracket Notation
//set the 2nd position (index 1) of myArray to anything you want, besides "b"

let myArray = ["a", "b", "c", "d"];
myArray[1] = "better upgrade this b to an a";
console.log(myArray);



//Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}
  
console.log(mixedNumbers(['IV', 5, 'six'])); //["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]



//Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
}
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));



//Remove Items Using splice()
//Modify the function, using splice(), so that it returns a value of 10

function sumOfTen(arr) {
    arr.splice(1, 2);
    return arr.reduce((a, b) => a + b);
}
  
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));



//Add Items Using splice()
//Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
} 
  
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));