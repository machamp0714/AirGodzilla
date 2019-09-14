import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Layout/Main";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import httpClient from "./components/Config/axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: false,
      user: {}
    };
  }

  handleSuccessfulAuth = (data) => {
    this.setState({
      loggedInStatus: true,
      user: data.user
    });
  };

  handleLogout = () => {
    this.setState({
      loggedInStatus: false,
      user: {}
    });
  };

  checkLoggedIn = () => {
    httpClient
      .get("http://localhost:3001/api/v1/is_logged")
      .then((response) => {
        if (response.data.logged_in && this.state.loggedInStatus === false) {
          this.setState({
            loggedInStatus: true,
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === true
        ) {
          this.setState({
            loggedInStatus: false,
            user: {}
          });
        }
      })
      .catch((error) => {
        console.log("logged_in?", error);
      });
  };

  componentDidMount() {
    this.checkLoggedIn();
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar
          handleLogout={this.handleLogout}
          loggedInStatus={this.state.loggedInStatus}
        />
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
          <Route path="/logout" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
