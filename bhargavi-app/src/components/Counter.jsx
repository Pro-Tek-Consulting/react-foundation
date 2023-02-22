import React, { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { currentCount: this.props.startAt };
		this.handleincrementClick = this.handleincrementClick.bind(this);
		this.handledecrementClick = this.handledecrementClick.bind(this);
	}
	handleincrementClick(e) {
		this.setState({ currentCount: this.state.currentCount + 1, name: Math.random() });
	}

	handledecrementClick(e) {
		this.setState({ currentCount: this.state.currentCount - 1, name: Math.random() });
	}
	render() {
		return (
			<div>
				<span> This is a counter.</span>
				<h1> Current Count: {this.state.currentCount}</h1>
				<button onClick={this.handleincrementClick}> increment </button>
				<button onClick={this.handledecrementClick}> decrement </button>
				{this.state.name && <span>Last updated by {this.state.name}</span>}
			</div>
		);
	}
}

export default Counter;
