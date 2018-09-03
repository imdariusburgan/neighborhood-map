import React, { Component } from "react";

export default class filterform extends Component {
  state = {
    inputText: ""
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            value={this.state.inputText}
            placeholder="Cleveland Locations"
          />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}
