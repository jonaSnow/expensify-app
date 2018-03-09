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
var template = (
	<div>
		<h1>{appInfo.title}</h1>
		{appInfo.subtitle && <p>{appInfo.subtitle}</p>}
		<p>{appInfo.options.length > 0 ? 'Here are your options' : 'No options'}</p>
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
	location: 'CT'
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	} 
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);