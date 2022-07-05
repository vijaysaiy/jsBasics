const firstName = "Vijay";
const job = "Software Developer";
const birthYear = 1998;
const year = 2022;

const vijay = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(vijay);

//template literals

const vijayNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`
console.log(vijayNew);
//multi-line string 
console.log('String with \n\multiple \n\lines');

//multi-line string using template literal
//no use of \n\

console.log(`String with
multiple lines
using template literal`)