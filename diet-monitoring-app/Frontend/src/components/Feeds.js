import React, { Component } from "react";
import "../Styles/feeds.css";
import Feed from "../components/Feed";

class Feeds extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-container">
        <Feed />
      </div>
    );
  }
}

export default Feeds;
