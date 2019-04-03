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



//Copy Array Items Using slice()
//Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.

function forecast(arr) {
    return arr.slice(2, 4);
}
  
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



//Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
}
  
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine(["He's", "Virgil", "Van", "Dijk"], 2));
console.log(copyMachine(["hi", "bye"], 10));



//Combine Arrays with the Spread Operator
//modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun']

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
  
console.log(spreadOut());



//Check For The Presence of an Element With indexOf()
//Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not

//method 1

function quickCheck1(arr, elem) {
    if(arr.indexOf(elem) != -1){
        return true;
    }
    return false;
}

console.log(quickCheck1(['squash', 'onions', 'shallots'], 'mushrooms')); //false

//method 2

function quickCheck2(arr, elem){
    return arr.indexOf(elem) != -1 ? true : false;
}

console.log(quickCheck2([19, 9, 1995], 19)); //true



//Iterate Through All an Array's Items Using For Loops
//Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed

function filteredArray(arr, elem) {
    let newArr = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].indexOf(elem) == -1){
            newArr.push(arr[i]);
            }
        }
    return newArr;
}
  
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); //[]
console.log(filteredArray([["Mo", "Salah"],["running", "down"],[1, 2, 3],["the", "wing"]], 1));



//Create complex multi-dimensional arrays

let myNestedArray = [
    ['unshift', 1, 2, 3, 'complex', 'nested', 'second'],
    [
      ['loop', 'shift'], ['deep'], [6, 7, 1000]
    ],
    [
      [
        ['concat', false, true], ['deeper'], ['spread', 'array']
      ],
    ],
    [
      [
        ['mutate', 1327.98, 
          ['deepest']
        ]
      ]
    ]
  ];
  
console.log(myNestedArray[1][1][0]); // deep
console.log(myNestedArray[2][0][1][0]); // deeper
console.log(myNestedArray[3][0][0][2][0]);// deepest



//Add Key-Value Pairs to JavaScript Objects

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
  
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
  
console.log(foods);



//Modify an Object Nested Within an Object

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
  
userActivity.data.online = 45;
  
console.log(userActivity);



//Access Property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
  
function checkInventory(scannedItem) {
    let currentValue = foods[scannedItem];
    return currentValue;
}
  
console.log(checkInventory("apples"));
console.log(checkInventory("grapes"));