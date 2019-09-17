import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Layout/Main";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import CreateRoom from "./components/Rooms/CreateRoom";
import EditRoom from "./components/Rooms/EditRoom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/room/new" component={CreateRoom} />
        <Route path="/room/:id/edit" component={EditRoom} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
