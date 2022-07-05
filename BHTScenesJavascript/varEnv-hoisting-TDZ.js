// begining of temporal dead zone for job and birthYear
// console.log(me);
// console.log(x); // not defined error
// console.log(job); // cannot access before initialization bcz of TDZ
// console.log(birthYear); // cannot access before initialization bcz of TDZ

var me = 'vijay'; // end of temporal dead zone for job and birthYear
let job = 'Engineer';
const birthYear = 1998;

//functions

console.log(add(2, 3)); // accessible
// console.log(addExp(2, 3)); // cannot access before initialization bcz of TDZ as the function value is assigned to a const variable
// console.log(addArr(2, 3)); // cannot access before initialization bcz of TDZ as the function value is assigned to a let variable
// console.log(addExpVar(2, 3)); // addExpVar is not function because var is hoisted and that variable is initialized as undefined and undefined is not a function
// console.log(addVar(2, 3)); // addExpVar is not function because var is hoisted and that variable is initialized as undefined and undefined is not a function

// hence function expressions cannot be defined using var variable

function add(a, b) {
  return a + b;
}

let addExp = function (a, b) {
  return a + b;
};

const addArr = (a, b) => a + b;

var addExpVar = function (a, b) {
  return a + b;
};
var addVar = (a, b) => a + b;

// example to demo a pitfall of hoisting
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // this will delete the cart eventhough the numProducts is 10, this is because of hoisting accessing the numProducts before declartion yield a undefined

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// demo of if variables are available on window object
// only the variables declared using var keyword are available on window object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
