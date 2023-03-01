/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCount: this.props.startAt };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      currentCount: this.state.currentCount + 1,
      name: Math.random(),
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ name: "Rohit" }), 10000);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // Rendering the component only if
  //   // passed props value is changed

  //   if (nextState.currentCount > 7) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let counterClasses = "myClasess";
    return this.state.currentCount === 20 ? null : (
      <div className={counterClasses}>
        <span> This is a counter.</span>
        <h1> Current Count: {this.state.currentCount}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        {this.state.name && <span>Last updated by {this.state.name}</span>}
      </div>
    );
  }
}

const FunCounter = (props) => {
  const { count } = props;
  if (count) {
    return <div>{count && <h1>Messages: {count}</h1>}</div>;
  }
  return null;
};

export default Counter;
