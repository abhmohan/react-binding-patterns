/*
	1.Using es5 React.createClass
	2.Binding inside render method
	3.Arrow function
	4.Bind inside constructor
	5.Arrow function in class property
*/

var MyComponent = React.createClass({

	render: function() {
		return(
			<button onClick={this.handleClick}>Click Me</button>
		)
	}
})


class MyComponent extends React.Component {

	render() {
		return(
			<button onClick={this.handleClick.bind(this)}>Click Me</button>
		)
	}
}

class MyComponent extends React.Component {

	render() {
		return(
			<button onClick={e => this.handleClick(e)}>Click Me</button>
		)
	}
}


class MyComponent extends React.Component {

	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this)
	}

	render() {
		return(
			<button onClick={this.handleClick}></button>
		)
	}
}

class MyComponent extends React.Component {

	handleClick = () => {
		console.error("button clicked")
	}
	render() {
		return(
			<button onClick={this.handleClick}></button>
		)
	}
}
