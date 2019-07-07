import React, { Component } from "react";
import { Input, Icon, Select, Checkbox, Button } from "antd";

const { Option } = Select;

import signupImg from "../images/sign_up.png";

import "../css/signupStyle.css";

class Signup extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <div className="form-container">
        <div className="left-section">
          <h2
            style={{
              color: "#bcbcbc",
              marginBottom: "0px",
              paddingTop: "10px"
            }}
          >
            Expense Tracker
          </h2>
          <img src={signupImg} width="450px" height="400px" />
          <h3 style={{ color: "#aaa" }}>Track to Save</h3>
        </div>
        <div className="right-section">
          <div className="mob-icon">
            <img src={signupImg} width="120px" height="83px" />
          </div>

          <div
            style={{
              borderBottom: "1px solid #efefef",
              paddingBottom: "10px"
            }}
            className="mob-header"
          >
            <div className="right-header">Sign Up Details</div>
            <h4>Please fill this form to create an account</h4>
          </div>

          <div style={{ marginTop: "28px" }}>
            <Input
              addonBefore={<Icon type="user" />}
              placeholder="Enter your name"
              style={{ width: "70%", marginTop: "15px" }}
            />
          </div>
          {/* <div>
            <Select
              style={{ width: 200 }}
              placeholder="Gender"
              onChange={this.handleChange}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </div> */}
          <div>
            <Input
              addonBefore={<Icon type="mail" />}
              placeholder="Enter your Email Id"
              style={{ width: "70%", marginTop: "15px" }}
            />
          </div>
          <div>
            <Input.Password
              addonBefore={<Icon type="lock" />}
              placeholder="Enter your password"
              style={{ width: "70%", marginTop: "15px" }}
            />
          </div>
          <div>
            <Input.Password
              addonBefore={<Icon type="lock" />}
              placeholder="Verify Password"
              style={{ width: "70%", marginTop: "15px" }}
            />
          </div>
          <div
            style={{
              marginTop: "15px",
              width: "auto",
              float: "left",
              marginLeft: "15%"
            }}
            className="checkbox-msg"
          >
            <Checkbox>
              <span style={{ color: "#bcbcbc" }}>I accept the</span>
              <a href="#">Terms of Use</a>
              <span style={{ color: "#bcbcbc" }}> and </span>
              <a href="#">Privacy Policy</a>
            </Checkbox>
          </div>
          <div style={{ marginTop: "50px" }}>
            <Button type="primary" style={{ float: "left", marginLeft: "15%" }}>
              Sign Up
            </Button>
          </div>
          <div style={{ marginTop: "73px", float: "left" }} className="footer">
            <span style={{ color: "#aaa" }}>Already have an account? </span>
            <a href="#" style={{ textDecoration: "underline" }}>
              Login Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
