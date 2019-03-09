import React, { Component } from "react";
import "./App.css";
import LeftNav from "./components/LeftNav";
import Feeds from "./components/Feeds";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftNav />
        <Feeds />
      </div>
    );
  }
}

export default App;
