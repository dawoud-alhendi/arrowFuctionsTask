// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const  greet = (name) =>  `hello ,${name}`;
console.log(greet("ali"))
 
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum =(a,b) => a+b;
console.log(sum(1,1));

// Q3) Write a simple arrow function that squares a number.
const squares = (numX) => numX *numX;// or **2
console.log(squares(5));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.




 
const listOfNumbers =[1,4,9,48];

const newArr = (arr) => {
    for (i=0 ; i <arr.length; i++){
         console.log(arr[i]**2);
    }
}

newArr(listOfNumbers)

