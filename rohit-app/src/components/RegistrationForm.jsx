import React, { Component } from "react";
import NameInput from "./NameInput";
import AddressInput from "./AddressInput.jsx";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      city: "",
      state: "",
      zip: "",
    };
  }
  onFnameChange = (e) => {
    this.setState({ name: { ...[this.state.name], fname: e.target.value } });
  };

  onLnameChange = (e) => {
    this.setState(...[this.state.name], { name: { lname: e.target.value } });
  };

  onCityChange = (e) => {
    this.setState({
      ...[this.state.address],
      address: { city: e.target.value },
    });
  };

  onStateChange = (e) => {
    this.setState({
      ...[this.state.address],
      address: { state: e.target.value },
    });
  };

  onZipChange = (e) => {
    this.setState({
      ...[this.state.address],
      address: { zip: e.target.value },
    });
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    console.log("this is your form data", this.state);
  };

  render() {
    return (
      <form>
        <NameInput
          onFnameChange={this.onFnameChange}
          onLnameChange={this.onLnameChange}
          value={this.state.name}
          //   fname={this.state.fname}
          //   lname={this.state.lname}
        />
        <AddressInput
          onCityChange={this.onCityChange}
          onStateChange={this.onStateChange}
          onZipChange={this.onZipChange}
          address={this.state.address}
        />
        <button type="submit" onClick={this.handleSubmitClick}>
          Submit
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
