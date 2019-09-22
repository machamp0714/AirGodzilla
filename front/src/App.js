import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Layout/Main";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import CreateRoom from "./components/Rooms/CreateRoom";
import RoomListingName from "./components/Rooms/RoomListingName";
import RoomPhoto from "./components/Rooms/RoomPhoto";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/room/new" component={CreateRoom} />
        <Route path="/room/:id/listing_name" component={RoomListingName} />
        <Route path="/room/:id/photo" component={RoomPhoto} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
