import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Top from "./components/Layout/Top";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Signin from "./containers/Auth/Signin";
import CreateRoom from "./containers/Rooms/CreateRoom";
import RoomListingName from "./components/Rooms/RoomListingName";
import RoomAmenities from "./components/Rooms/RoomAmenities";
import RoomPhotos from "./containers/Rooms/RoomPhotos";
import RoomConfirm from "./containers/Rooms/RoomConfirm";
import LoggedInRequired from "./containers/Auth/LoggedInRequired";

class App extends Component {
  componentDidMount() {
    this.props.actions.loggedIn();
  }

  render() {
    const {loggedInStatus, isLoading, user, actions} = this.props;
    return (
      <BrowserRouter>
        <Navbar
          loggedInStatus={loggedInStatus}
          isLoading={isLoading}
          user={user}
        />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route
            path="/signup"
            render={() => (
              <Signup signup={actions.signup} loggedInStatus={loggedInStatus} />
            )}
          />
          <Route
            path="/signin"
            render={() => (
              <Signin login={actions.login} loggedInStatus={loggedInStatus} />
            )}
          />
          <Route
            exact
            path="/become-a-host"
            render={() => <LoggedInRequired WrappedComponent={CreateRoom} />}
          />
          <Route
            exact
            path="/become-a-host/listing-name"
            render={() => (
              <LoggedInRequired WrappedComponent={RoomListingName} />
            )}
          />
          <Route
            exact
            path="/become-a-host/ammenities"
            render={() => <LoggedInRequired WrappedComponent={RoomAmenities} />}
          />
          <Route
            exact
            path="/become-a-host/photos"
            render={() => <LoggedInRequired WrappedComponent={RoomPhotos} />}
          />
          <Route
            exact
            path="/become-a-host/confirm"
            render={() => <LoggedInRequired WrappedComponent={RoomConfirm} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
