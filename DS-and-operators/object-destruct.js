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
};

restuarant.orderDelivery({
  time: '22:30',
  address: 'adoni',
  mainIndex: 2,
  starterIndex: 2,
});
restuarant.orderDelivery({
  time: '22:30',
  starterIndex: 2,
});

const { name, openingHours, categories } = restuarant;
console.log(name, openingHours, categories);

// to name variables with custom names

const {
  name: restuarantName,
  openingHours: hours,
  categories: tags,
} = restuarant;
console.log(restuarantName, hours, tags);

// default values

const { menu = [], starterMenu: starters = [] } = restuarant;
console.log(menu, starters);

// mutating variables of objects

let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };

// to assign a,b vars the values of a,b of obj

({ a, b } = obj);
console.log(a, b);

// nested obj desturcturing

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

var arr = ['dog', 'cat', 'hen'];
arr[100] = 'fox';
console.log(arr.length);
const obj1 = {
  a:1,
  b:2,
  c:3
}
const obj2 = {
 ...obj1,
 a:0,
}
console.log(obj2.a,obj2.b);
var thing;
let func = (str ='no arg') =>{
  console.log(str);
}
func(thing)
func(null)

var pokedex= ['hello','bello','chello']
pokedex.pop();
console.log(pokedex.pop());