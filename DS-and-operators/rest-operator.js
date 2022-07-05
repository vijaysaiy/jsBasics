// Spread: to build new arrays and pass multiple arguments in function
// Rest : condense all elements into an array

//SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others); // 1,2,[3,4,5]

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
  orderPizaa: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const [biryani, , kofta, ...otherFoodItems] = [
  ...restuarant.mainMenu,
  ...restuarant.starterMenu,
];
console.log(biryani, kofta, otherFoodItems);

// the rest element should be last element other it wont work
// for ex, the below ex is illegal

// const [Biryani, , Bofta, ...otherFooditems,bread] = [
//   ...restuarant.mainMenu,
//   ...restuarant.starterMenu,
// ];

// objects

const { sat, ...weekdays } = restuarant.openingHours;
console.log(weekdays); // only thu and fri objects

//functions

const add = function (...numbers) {
  // rest argument not spread
  //   console.log(numbers);    // prints array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // spreading

restuarant.orderPizaa('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms ['onion', 'olives', 'spinach']
restuarant.orderPizaa('mushrooms'); // mushrooms []
