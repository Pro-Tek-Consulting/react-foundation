import React, { Component } from "react";

class NameInput extends Component {
  render() {
    return (
      <div id="naming">
        <label
          htmlFor="fname"
          value={this.props.value.fname}
          onChange={this.props.onFnameChange}
        >
          First Name
        </label>
        <input type="text" name="fname" />

        <label
          htmlFor="fname"
          value={this.props.value.lname}
          onChange={this.props.onLnameChange}
        >
          Last Name
        </label>
        <input type="text" name="lname" />
      </div>
    );
  }
}

export default NameInput;
