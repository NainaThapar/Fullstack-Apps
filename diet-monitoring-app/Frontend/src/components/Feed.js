import React, { Component } from "react";
import "../Styles/feed.css";

class Feed extends Component {
  state = {};
  render() {
    return (
      <div className="feed-container">
        <div className="image">
          <img
            src={require("../images/feed1.jpg")}
            className="feed-img"
            alt="food Image"
          />
          <div className="overlay" />
          <p className="feed-title">Chili Rellenos Casserole</p>
          <div className="feed-nutri-value">
            <div>
              <span className="nutri-title">Calories</span>
              <span className="divider">|</span>
              <span className="nutri-title">Protein</span>
              <span className="divider">|</span>
              <span className="nutri-title">Fat</span>
              <span className="divider">|</span>
              <span className="nutri-title">Carbs</span>
            </div>
            <div>
              <span className="nutri-value">331</span>
              <span className="nutri-value">16.3</span>
              <span className="nutri-value">20.9</span>
              <span className="nutri-value">18.9</span>
            </div>
          </div>
        </div>

        <div className="receipe-container">
          <div className="heading">
            <h3 className="title">Ingridients</h3>
          </div>
          <div className="body">
            <li>
              <span className="glyphicon glyphicon-cutlery" />
              1/2 cup milk
            </li>
            <li>
              <span class="glyphicon glyphicon-cutlery" />2 tablespoons all
              purpose flour
            </li>
            <li>
              <span class="glyphicon glyphicon-cutlery" />1 (5 ounce) evaporated
              can milk
            </li>
            <li>
              <span class="glyphicon glyphicon-cutlery" />8 ounces Monterey Jack
              Cheese
            </li>
          </div>
        </div>
        <div className="receipe-container">
          <div className="heading">
            <h3 className="title">Directions</h3>
          </div>
          <div className="body method-container">
            <p className="method">1. Prepare</p>
            <p className="method-desc">
              Remove the outer leaves from the cauliflower, then slice it 1cm
              thick and put it on the pan, turning when lightly charred
            </p>
            <p className="method">2. Start cooking</p>
            <p className="method-desc">
              Remove the outer leaves from the cauliflower, then slice it 1cm
              thick and put it on the pan, turning when lightly charred
            </p>
            <p className="method">3. Serve</p>
            <p className="method-desc">
              Remove the outer leaves from the cauliflower, then slice it 1cm
              thick and put it on the pan, turning when lightly charred
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
