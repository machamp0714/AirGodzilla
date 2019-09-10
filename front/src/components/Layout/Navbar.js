import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  render = () => {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h1">AirGodzilla</Typography>
        </Toolbar>
      </AppBar>
    );
  };
}

export default Navbar;
