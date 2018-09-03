import React, { Component } from "react";
import GoogleMaps from "../components/googlemap";
import Header from "../components/header";
import SideMenu from "../components/sidemenu";

export default class homepage extends Component {
  state = {
    filteredListOpen: false
  };

  // Show filtered list on header button click
  showOrHideList = () => {
    this.setState({ filteredListOpen: !this.state.filteredListOpen });
    console.log(this.state.filteredListOpen);
  };

  render() {
    return (
      <React.Fragment>
        <Header onMenuClick={this.showOrHideList} />
        <SideMenu displayMenu={this.state.filteredListOpen} />
      </React.Fragment>
    );
  }
}
