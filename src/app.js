import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render((<IndecisionApp />), document.getElementById('app'));

// ReactDOM.render((
// 	<Layout>
// 		<div>
// 			<h1>Page Title</h1>
// 			<p>This is my page</p>
// 		</div>
// 	</Layout>
// ), document.getElementById('app'));

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