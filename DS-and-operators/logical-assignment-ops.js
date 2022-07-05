const rest1 = {
  name: 'Hotel-1',
  numGuests: 20,
};

const rest2 = {
  name: 'Hotel-2',
  owner: 'Vijay',
};

//set default guests in objects which do not have numGuests
rest1.numGuests = rest1.numGuests || 10; // short circuits
rest2.numGuests = rest2.numGuests || 10; // doesn't short circuit
console.log(rest1, rest2);

// OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// ?? assignment operator and the correct way
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// to anonymise owner's name
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
