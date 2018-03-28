# react-binding-patterns
Different ways of binding this in react

1.Inside render method

export default class MyComponent extends React.Component {
  
  handleClick() {
    alert("button clicked")
  }
  render() {
    return(
      <button onClick={this.handleClick.bind(this)}></button>
    )
  }
}
