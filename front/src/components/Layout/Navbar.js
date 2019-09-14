import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = ({ loggedInStatus, handleLogout }) => {
  return (
    <nav>
      <Link to="/">AirGodzilla</Link>
      {loggedInStatus ? (
        <SignedInLinks handleLogout={handleLogout} />
      ) : (
        <SignedOutLinks />
      )}
    </nav>
  );
};

export default Navbar;
