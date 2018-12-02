//
// Object Destructuring
//

// const person = {
//   name: 'Jona',
//   age: 28,
//   location: {
//     city: "West Hartford",
//     temp: 39
//   }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 South Juniper', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];

const [itemName, , mediumPrice] = item;
// grab 1st and 3rd items usign array destructuring
console.log(`A medium ${itemName} costs ${mediumPrice}`);
