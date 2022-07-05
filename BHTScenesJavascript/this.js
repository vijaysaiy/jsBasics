'use strict';

console.log(this); // points to window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined because of strict mode otherwise window object
};

calcAge(1998);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window object since arrow fns doesnt get its own, and get lexial(parents) scope's this keyword, hence global scope object is window
};

calcAgeArrow(1998);

const vijay = {
  birthYear: 1998,
  calcAge: function () {
    console.log(this); // point to vijay object itself
    console.log(2037 - this.birthYear);
  },
};
vijay.calcAge();

// proof that this is dynamic
const vishnu = {
  birthYear: 2017,
};

vishnu.calcAge = vijay.calcAge;

vishnu.calcAge(); // here this keyword will point to vishnu object because vishnu object is calling it

const f = vijay.calcAge;

// f(); // here this keyword will be undefined because f doesn't have any owner object and is a nomral function call

// arrow functions vs regular functions

const shiva = {
  firstName: 'Shiva',
  age: 21,
  greet: () => console.log(`Hey, ${this.firstName}`), // prints 'Hey, undefined
  // because arrow fns do not have own this keyword they just use the lexical/global this object
};

shiva.greet();
console.log(this.firstName); // this is also undefined, same thing happens in about greet () => {} function

// if there's a var firstName variable,, that value will be printed hence dont use var keyword for declaring variables

// function inside a method

const vijay2 = {
  birthYear: 1998,
  calcAge: function () {
    console.log(this); // point to vijay object itself
    console.log(2037 - this.birthYear);
    const self = this;
    const isMillenial = function () {
      //   console.log(this.birthYear >= 1981 && this.birthYear <= 1996); // here this keyword is undefined
      // because this is normal function and in normal functions this is undefined
      // to access this, declare a variable before declaring the function and use it.(scope chaining)
      // other wise declare function as arrow function
      console.log(self.birthYear >= 1981 && self.birthYear <= 1996); // prints false
    };

    const isMillenial2 = () => {
      // here this point to vijay2 object ( arrow function this points to lexical scope)
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996); // prints false
    };
    isMillenial();
    isMillenial2();
  },
};

vijay2.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addArr = (a, b) => {
  console.log(arguments); // undefined because arguments kyword is not available for arrow functions
  return a + b;
};
console.log(addExpr(2, 3, 4, 5, 6)); // these extra arguments will still be there
console.log(addArr(2, 3));
