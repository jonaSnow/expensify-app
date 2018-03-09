'use strict';

console.log('App.js is running');

// if statements
// ternary operators
// logical operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 'Here are your options' 'No options'


// create app object title/subtitle
// use title/subtitle
// render template
var appInfo = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['hey']
};

// JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		appInfo.title
	),
	appInfo.subtitle && React.createElement(
		'p',
		null,
		appInfo.subtitle
	),
	React.createElement(
		'p',
		null,
		appInfo.options.length > 0 ? 'Here are your options' : 'No options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'item one '
		),
		React.createElement(
			'li',
			null,
			'item two '
		)
	)
);

// Create a templateTwo var JSX expression
// div
//	h1 -> Jonathan Guzman
//	p -> Age: 27
//	p -> Location: Conneticut
// Render templateTwo instead template.
var user = {
	name: 'Jona',
	age: 27,
	location: 'CT'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
}

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
