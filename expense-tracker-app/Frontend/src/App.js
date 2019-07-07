import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Signup from "./Components/SignUp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default hot(module)(App);
