import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./components/Layout/Top";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import CreateRoom from "./containers/Rooms/CreateRoom";
import RoomListingName from "./components/Rooms/RoomListingName";
import RoomAmenities from "./components/Rooms/RoomAmenities";
import RoomPhotos from "./containers/Rooms/RoomPhotos";

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
          {...actions}
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
          <Route exact path="/become-a-host" component={CreateRoom} />
          <Route
            exact
            path="/become-a-host/listing-name"
            component={RoomListingName}
          />
          <Route
            exact
            path="/become-a-host/ammenities"
            component={RoomAmenities}
          />
          <Route exact path="/become-a-host/photos" component={RoomPhotos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
