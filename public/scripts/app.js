'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Jonathan'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
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
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Jonathan Guzman'
	),
	React.createElement(
		'p',
		null,
		'Age: 27'
	),
	React.createElement(
		'p',
		null,
		'Location: Conneticut'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
