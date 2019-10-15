import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../../containers/Auth/SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { AppBar, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  header: {
    minHeight: 83
  }
}));

const Navbar = ({ loggedInStatus, isLoading }) => {
  const classes = useStyles();

  if (isLoading) {
    return null;
  }
  return (
    <AppBar className={classes.header} position="static" color="inherit">
      <Container className={classes.root}>
        <Typography variant="h1" style={{ fontSize: 20 }}>
          <Link to="/" className="navlink">
            AirGodzilla
          </Link>
        </Typography>
        {loggedInStatus ? <SignedInLinks /> : <SignedOutLinks />}
      </Container>
    </AppBar>
  );
};

export default Navbar;
