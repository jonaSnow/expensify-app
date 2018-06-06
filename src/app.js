import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
// 	constructor() {
// 		this.name = 'Jona';
// 	}

// 	getGreeting() {
// 		return `Hi. My name is ${this.name}.`;
// 	}
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());

// // -----------------------

// class NewSyntax {
// 	name = 'Jen';
// 	getGreeting = () => {
// 		return `Hi. My name is ${this.name}.`;
// 	}
// }

// const newSyntax = new NewSyntax();
// const newGetgreeting = newSyntax.getGreeting;
// console.log(newGetgreeting());