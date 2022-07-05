
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



// if(hasDriversLicense && hasGoodVision) {
//     console.log("Vijay is able to drive");
// }else{
//     console.log("someone else should drive")
// }

const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Vijay is able to drive");
}else{
    console.log("someone else should drive")
}