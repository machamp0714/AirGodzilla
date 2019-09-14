import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/">AirGodzilla</Link>
      {props.loggedInStatus ? (
        <SignedInLinks handleLogout={props.handleLogout} />
      ) : (
        <SignedOutLinks />
      )}
    </nav>
  );
};

export default Navbar;
