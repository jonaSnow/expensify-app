// function square (x) {
// 	return x * x;
// };

// console.log(square(3));

// const squareArrow = (x) => {
// 	return x * x;
// };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(4));



// Challenge - use arrow functions 
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax
// store in console.log


const getFirstName = (name) => {
  return name.split(' ')[0];
}

console.log(getFirstName('Mayra MavarezFinol'));

const getFirstNameArrow = (name) => name.split(' ')[0];

console.log(getFirstNameArrow('Jona Guzman'));