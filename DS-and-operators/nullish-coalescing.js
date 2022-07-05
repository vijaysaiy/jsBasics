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

restuarant.numGuests = 0;
const guest = restuarant.numGuests || 10; // 10 because numGuest is falsy because of 0, but here 0 is real number(means no guests are present)
// it should print 0;
console.log(guest);

restuarant.numGuests = 0;
// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restuarant.numGuests ?? 10;
console.log(guestCorrect);
