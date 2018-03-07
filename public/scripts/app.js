'use strict';

console.log('App.js is running');

// create app object title/subtitle
// use title/subtitle
// render template
var appInfo = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer'
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
	React.createElement(
		'p',
		null,
		appInfo.subtitle
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
	location: 'Lawrence'
};
var userName = 'Jona';
var userAge = 27;
var userLocation = 'Conneticut';
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
