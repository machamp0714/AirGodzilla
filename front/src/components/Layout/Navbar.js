import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { checkLoggedIn } from "../../store/actions/authAction";

import { withStyles } from "@material-ui/styles";
import { AppBar, Container, Typography } from "@material-ui/core";

const styles = {
  root: {
    display: "flex",
    position: "relative",
    alignItems: "center"
  }
};

class Navbar extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.checkLoggedIn();
  }

  render() {
    const { loggedInStatus, classes } = this.props;
    return (
      <AppBar position="static">
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
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.auth.loggedInStatus,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLoggedIn: () => {
      dispatch(checkLoggedIn());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Navbar));
