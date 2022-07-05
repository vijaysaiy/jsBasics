const age = 15;

if (age >= 18) {
  console.log("Vijay can start driving 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Vijay is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2021;
let century;
if(birthYear <= 2000){
     century = 20
}else{
    century = 21
}
console.log(century);