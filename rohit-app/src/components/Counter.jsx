/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCount: this.props.startAt };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ currentCount: this.state.currentCount + 1, name: Math.random() });
  }
  render() {
    return (
      <div>
        <span> This is a counter.</span>
        <h1> Current Count: {this.state.currentCount}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        {this.state.name && <span>Last updated by {this.state.name}</span>}
      </div>
    );
  }
}

const FunCounter = (props) => {
  return (
    <div>
      <span> This is a counter.</span>
      <h1> Current Count: {props.startAt}</h1>
      <button>Click Me</button>
      {this.state.name && <span>Last updated by {this.state.name}</span>}
    </div>
  );
};

export default Counter;
