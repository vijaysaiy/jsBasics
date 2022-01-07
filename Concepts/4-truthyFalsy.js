//falsy values are not exactly false values but will be converted to false when converted to boolean
//everything else is truthy
//5 falsy values: 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Vijay'));
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;

if(money){  //here money will be coerced to boolean i.e 0 is converted to false as 0 is falsy value
    console.log("Don't spend it all")
}else{
    console.log('You should get a job')
}

let height;

if(height){  //here height is undefined hence it will be false in boolean
    console.log("Height is defined")
} else {
    console.log("Height is UNDEFINED")
}