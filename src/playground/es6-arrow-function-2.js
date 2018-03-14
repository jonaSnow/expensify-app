// arguments object - no longer bound with arrow function, use ES5 function

const add = (a, b) => {
	// console.log(arguments);
	return a + b;
};
console.log(add(55, 1));

// this keyword no longer bound with arrow function

const user = {
	name: 'Jona',
	cities: ['Lawrence', 'Queens', 'West Hartford'],
	// printPlacesLived: function () {
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived())

// Challenge Area


const multiplier = {
	// numbers - array of numbers
	// multiplyBy - single number
	// multiply = return a new array where numbers have been multiplied
	numbers: [1 ,2 ,3],
	multiplyBy: 4,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());