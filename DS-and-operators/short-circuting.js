// logical operators can use any data type and can return any data type and can also do
// short-circuting
//for or(||) : if first operand is truthy then other operand is neglected
console.log(3 || 'Vijay');
console.log('' || 'Vijay'); // '' is falsy so went to second operand and no short circuting
console.log(true || 0); // true is truthy hence short circuting
console.log(undefined || null); // undefined is falsy and null is falsy hence no short circuting

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// here Hello is a truthy hence next operands are short circuted

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
const guests1 = restuarant.numGuests ? restuarant.numGuests : 10;

console.log(guests1);

// use shortcircuting

const guest2 = restuarant.numGuests || 10; // numGuest doesn't exist hence 10
console.log(guest2);

restuarant.numGuests = 23;
const guest3 = restuarant.numGuests || 10; // 23 because numGuest is truthy
console.log(guest3);

// one bug here

restuarant.numGuests = 0;
const guest4 = restuarant.numGuests || 10; // 10 because numGuest is falsy because of 0, but here 0 is real number(means no guests are present)
// it should print 0; will address this later(nullish coalescing)
console.log(guest4);

console.log('-------AND-------');
console.log(0 && 'Vijay'); // 0 because 0 is falsy
console.log(7 && 'Vijay'); // Vijay because 7 is truthy
console.log('Hello' && 23 && null && 'Vijay'); // null because null is falsy and rest is shortcircuted

// practical example

if (restuarant.orderPizaa) {
  restuarant.orderPizaa('mushrooms', 'spinach');
}

// a better way using shortcircuting but a bit difficult interms of readability

restuarant.orderPizaa && restuarant.orderPizaa('mushrooms', 'spinach');


