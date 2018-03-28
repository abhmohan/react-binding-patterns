
//Using ES5 React.createClass(auto binding no need to explicitly bind this)
var MyComponent = React.createClass({
	render: function() {
		return(
			<button onClick={this.handleClick}>Click Me</button>
		)
	}
})

//binding this inside render
class MyComponent extends React.Component {
	render() {
		return(
			<button onClick={this.handleClick.bind(this)}>Click Me</button>
		)
	}
}

//arrow function
class MyComponent extends React.Component {
	render() {
		return(
			<button onClick={e => this.handleClick(e)}>Click Me</button>
		)
	}
}

//binding inside constructor(Recommended in React Docs)
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

//Arrow function in class property
class MyComponent extends React.Component {
	handleClick = () => {
		
	}
	render() {
		return(
			<button onClick={this.handleClick}></button>
		)
	}
}
