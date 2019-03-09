import React, { Component } from "react";
import "../Styles/leftnav.css";

class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <img
          className="profile-img"
          src={require("../images/userImg.jpg")}
          alt="user"
        />
        <p className="user-name">Naina Thapar</p>
        <div className="sidenav-link">
          <a href="#">Dashboard</a>
          <a href="#">Tasks</a>
          <a href="#">Goals</a>
          <a href="#">Receipes</a>
          {/* <a href="#">Report</a> */}
          <a href="#">Settings</a>
        </div>
      </div>
    );
  }
}

export default LeftNav;
