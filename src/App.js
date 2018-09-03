import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import GoogleMap from "./components/googlemap";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <React.Fragment>
                <Header />
                <GoogleMap />
              </React.Fragment>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
