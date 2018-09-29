import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";

const Projects = () => <h2>Projects</h2>;
const ProjectsNew = () => <h2>New Project</h2>;
const UserProfile = () => <h2>Profile</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      //will think about creating a container for the <div>
      <div className="">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/new" component={ProjectsNew} />
            <Route path="/user_profile" component={UserProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
