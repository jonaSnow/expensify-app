console.log('App.js is running');

// JSX - JavaScript XML
var template = (
	<div>
		<h1>Jonathan</h1>
		<p>This is some info</p>
		<ol>
			<li>item one </li>
			<li>item two </li>
		</ol>
	</div>
);

// Create a templateTwo var JSX expression
// div
//	h1 -> Jonathan Guzman
//	p -> Age: 27
//	p -> Location: Conneticut
// Render templateTwo instead template.
var templateTwo = (
	<div>
		<h1>Jonathan Guzman</h1>
		<p>Age: 27</p>
		<p>Location: Conneticut</p>
	</div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);