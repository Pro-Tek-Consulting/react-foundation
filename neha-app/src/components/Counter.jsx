import React, { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { currentCount: this.props.startAt };
		this.addHandleClick = this.addHandleClick.bind(this);
		this.decreaseHandleClick = this.decreaseHandleClick.bind(this);
	}
	addHandleClick(e) {
		this.setState({ currentCount: this.state.currentCount + 1, name: this.state.currentCount });
	}
	decreaseHandleClick(e) {
		this.setState({ currentCount: this.state.currentCount - 1, name: this.state.currentCount });
	}

	render() {
		return (
			<div>
				<h1> This is a counter.</h1>
				<h3> Current Count: {this.state.currentCount}</h3>
				<button onClick={this.addHandleClick}>Click Me to Increase</button>
				<button onClick={this.decreaseHandleClick}>Click Me to Decrease</button>
				{this.state.name && <h4>Last updated by {this.state.name}</h4>}
			</div>
		);
	}
}

export default Counter;
