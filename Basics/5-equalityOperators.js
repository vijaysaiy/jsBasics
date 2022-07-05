const age = "18";

if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

// == loose comparision
// === strict comparision

const favourite = Number(prompt("What is your favorite number?"));
//prompt return string type
console.log(favourite);

if (favourite === 23) { // '23' == 23
  console.log("Cool! 23 is a great number");
} else if(favourite === 7){
    console.log('7 is also a cool number');
} else{
    console.log('Number is not 23 or 7')
}

if(favourite !== 23) console.log('Why not 23?')