const restuarant = {
  name: 'My hotel',
  location: 'Adoni',
  categories: ['Roties', 'Curries', 'Rice', 'Deserts'],
  starterMenu: ['Gobi', 'Soya chap stick', 'Paneer tikka masala'],
  mainMenu: ['Biryani', 'Paneer masala', 'Malai kofta'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const nums = [1, 2, 3];
// to assign individual array ele to variables
const a = nums[0];
const b = nums[1];
const c = nums[2];

// better way -> array destructuring

const [x, y, z] = nums;
console.log(x, y, z);

const [first, second] = restuarant.categories;
console.log(first, second);
// if we want only first and third el in array

const [one, , two] = restuarant.categories;

console.log(one, two);

let [main, secondary] = restuarant.categories;
// to switch variables
// // normal method
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// destructure way

[main, secondary] = [secondary, main];
console.log(main, secondary);

// get 2 return values from a function
const [starterCourse, mainCourse] = restuarant.order(2, 0);
console.log(starterCourse, mainCourse);

// nested arrays

const nestedArr = [2, 4, [5, 6]];
const [i, , j] = nestedArr;
console.log(i, j); // we get 2 and [5,6]

//to get all individual els
// nested desturcturing
const [k, , [l, m]] = nestedArr;
console.log(k, l, m); // 2 5 6 as indidual elements

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1 // here 1 is the default values
