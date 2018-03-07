console.log('App.js is running');


// create app object title/subtitle
// use title/subtitle
// render template
var appInfo = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer'
};

// JSX - JavaScript XML
var template = (
	<div>
		<h1>{appInfo.title}</h1>
		<p>{appInfo.subtitle}</p>
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
var user = {
	name: 'Jona',
	age: 27,
	location: 'Lawrence'
};
var userName = 'Jona';
var userAge = 27;
var userLocation = 'Conneticut'
var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);