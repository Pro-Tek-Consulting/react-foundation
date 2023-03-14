import React, { Component } from "react";

class AddressInput extends Component {
  render() {
    return (
      <div id="address">
        <label htmlFor="city">City</label>
        <input type="text" name="fname" value={this.props.address.city} onChange={this.props.onCityChange} />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={this.props.address.state}
          onChange={this.props.onStateChange}
        />
        <label htmlFor="zip">Zipcode</label>
        <input type="number" name="zip" value={this.props.address.zip} onChange={this.props.onZipChange} />
      </div>
    );
  }
}

export default AddressInput;
