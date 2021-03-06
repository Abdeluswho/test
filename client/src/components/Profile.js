import React, { Component } from "react";
import { connect } from "react-redux";
import PersonalInfo from "./PersonalInfo";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="main-content">
          <h3>{this.props.auth.userName}</h3>
          <PersonalInfo />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
