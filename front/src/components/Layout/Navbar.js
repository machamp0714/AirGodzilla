import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { checkLoggedIn } from "../../store/actions/authAction";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.props.checkLoggedIn();
  }

  render() {
    const { loggedInStatus } = this.props;
    return (
      <nav>
        <Link to="/">AirGodzilla</Link>
        {loggedInStatus ? <SignedInLinks /> : <SignedOutLinks />}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.auth.loggedInStatus
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
