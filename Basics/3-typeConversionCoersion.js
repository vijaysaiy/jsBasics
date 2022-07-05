//conversion - converting one data type to another data type

const inputYear = "1991";

console.log(Number(inputYear)); //string is converted to Number

console.log(Number("vijay")); //o/p is NaN

console.log(String(23));

//type coercion

console.log("i am " + 23 + " years old"); // the number is converted to string automatically this is type coercion
console.log("23" - "10" - 3); //strings are converted to numbers automatically
console.log("23" + "10" + 3); //number is converted to string automatically
console.log("24" / "3"); //number

//note: + triggers string coersion
//other operator will convert to numbers as shown in above examples

let n = "1" + 1;
n = n - 1;
console.log(n);

