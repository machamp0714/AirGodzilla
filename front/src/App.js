import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";

class App extends Component {
  componentDidMount() {
    this.props.actions.loggedIn();
  }

  render() {
    const { loggedInStatus, isLoading, user, actions } = this.props;

    return (
      <BrowserRouter>
        <Navbar
          loggedInStatus={loggedInStatus}
          isLoading={isLoading}
          user={user}
        />
        <Switch>
          <Route
            path="/signup"
            render={() => (
              <Signup signup={actions.signup} loggedInStatus={loggedInStatus} />
            )}
          />
          <Route
            path="/signin"
            render={() => <Signin login={actions.login} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
