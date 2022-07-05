const arr = [1, 2, 3];
const badNewArr = [7, 8, arr[0], arr[1], arr[2]];
const goodNewArr = [7, 8, ...arr];

// merge two arrays
const mainMenu = ['panner masala', 'malai kofta', 'Chole masala'];
const starterMenu = ['gobi', 'paneer tikka'];

const menu = [...mainMenu, ...starterMenu];
console.log(menu);

// spread operator works on all iterables
// Ex: arrays, strings, sets, maps and on object from ES6

const str = 'Vijay';
console.log(...str); // prints individual ele from str
const letters = [...str];
console.log(letters);

// use only to get individual elements to store in array or while passing as args in function
// console.log(`${...str} Yekbote`); // won't work

// more useful real world examples

const restuarant = {
  name: 'My hotel',
  location: 'Adoni',
  categories: ['Roties', 'Curries', 'Rice', 'Deserts'],
  starterMenu: ['Gobi', 'Soya chap stick', 'Paneer tikka masala'],
  mainMenu: ['Biryani', 'Paneer masala', 'Malai kofta'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hrs
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delived to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// to call order pasta

// restuarant.orderPasta(...ingredients);

// objects
const newRestaurant = { ...restuarant, founder: 'Vijaysai', foundedIn: 1998 };

console.log(newRestaurant);
