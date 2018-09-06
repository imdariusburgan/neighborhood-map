import React, { Component } from "react";

export default class filterform extends Component {
  state = {
    inputText: ""
  };

  // This function takes the query of the the input field,
  // changes the state's 'inputText' variable to match the input's query,
  // and then passes the query to the passFilterText function
  onInputChange = e => {
    let inputQuery = e.target.value;
    this.setState({ inputText: inputQuery });
    this.passFilterText(inputQuery);
    console.log("onInputChange function is working");
  };

  // This function passes the value from the input field
  // to this component's onChange property
  passFilterText = inputText => {
    this.props.onchange(inputText);
    console.log("passFilterText function is working");
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          value={this.state.inputText}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}
