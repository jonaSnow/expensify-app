var nameVar = 'Jona';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Mayra';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Chewie';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping, its scoped in for loop/if statement

var fullName = 'Yona Guzman';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);