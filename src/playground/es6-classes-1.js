class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGretting() {
		return `Hi. I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} years(s) old.`;
	}
}

const me = new Person('Jona Guzman', 27);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
