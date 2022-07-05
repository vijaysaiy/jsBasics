'use strict';

function calcAge(birthYear) {
  const currentYear = 2037;
  const age = currentYear - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1998) {
      const str = `Oh, you are a millenial, ${firstName}`;
      var str2 = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //   output = 'NEW output'; // now output is assigned with New output string
      const output = 'NEW OUTPUT'; // this is different variable with in this scope
    }
    // console.log(str); // block scoped hence out of scope here
    console.log(str2); // function scope and not block scope, only let and const are block scope
    // console.log(add(2, 3)); // functions are also block scope in strict mode
    console.log(output); // prints top output variable
  }
  printAge();

  return age;
}

const firstName = 'Vijay';

calcAge(1998);
// console.log(age); // out of scope
// printAge(); // out of scope
