import React from "react";
import { Link } from "react-router-dom";
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
      <nav>
        <Link to="/">AirGodzilla</Link>
        {this.state.logged ? <SignedInLinks /> : <SignedOutLinks />}
      </nav>
    );
  };
}

export default Navbar;
