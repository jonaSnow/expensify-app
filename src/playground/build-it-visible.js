let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	render()
};

const appRoot = document.getElementById('app');

const render = () => {
	const jsx = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>{visibility ? 'hide details' : 'show details'}</button>
			{visibility && 
				(
					<div>
						<p>Here are some details now</p>
					</div>
				) 
			}
		</div>
	);

	ReactDOM.render(jsx, appRoot);
};

render();

/*
pre video review
const app json var not needed
use let "variable name" = boolean
condition for visibility was backwards
not as a nice as "if visible button is named hide details"
{app.isVisible ? app.details : null} == {visibility && (<div><p>Here are some details now</p></div>)}
second way is cleaner since it was only visible return details otherwise return nothing
""
const app = {
	title: 'Visibility Toggle',
	details: "Here are some details",
	isVisible: false
};

const toggleDetails = () => {
	app.isVisible = !app.isVisible;
	renderVisibilityToggleApp()
};

const appRoot = document.getElementById('app');

const renderVisibilityToggleApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={toggleDetails}>{!app.isVisible ? 'show details' : 'hide details'}</button>
			<p>{app.isVisible ? app.details : null}</p>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

renderVisibilityToggleApp();
*/