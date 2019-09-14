import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Layout/Main";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
  }

  handleSuccessfulAuth = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                handleSuccessfulAuth={this.handleSuccessfulAuth}
              />
            )}
          />
          <Route
            path="/signin"
            render={(props) => (
              <Signin
                {...props}
                handleSuccessfulAuth={this.handleSuccessfulAuth}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
