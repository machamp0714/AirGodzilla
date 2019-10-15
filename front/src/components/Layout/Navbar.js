import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../../containers/Auth/SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { AppBar, Container, Typography } from "@material-ui/core";

const Navbar = ({ loggedInStatus, isLoading }) => {
  if (isLoading) {
    return null;
  } else {
    return (
      <AppBar position="static">
        <Container>
          <Typography variant="h1" style={{ fontSize: 20 }}>
            <Link to="/" className="navlink">
              AirGodzilla
            </Link>
          </Typography>
          {loggedInStatus ? <SignedInLinks /> : <SignedOutLinks />}
        </Container>
      </AppBar>
    );
  }
};

export default Navbar;
