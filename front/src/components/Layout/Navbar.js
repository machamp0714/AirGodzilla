import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { checkLoggedIn } from "../../store/actions/authAction";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.props.checkLoggedIn();
  }

  render() {
    const { loggedInStatus } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" style={{ fontSize: 20 }}>
            <Link to="/" className="navlink">
              AirGodzilla
            </Link>
          </Typography>
          {loggedInStatus ? <SignedInLinks /> : <SignedOutLinks />}
        </Toolbar>
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
)(Navbar);
