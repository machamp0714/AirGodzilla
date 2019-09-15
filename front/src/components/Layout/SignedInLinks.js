import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAction";

import Button from "@material-ui/core/Button";

class SignedInLinks extends React.Component {
  handleLogoutClick = () => {
    this.props.logout();
  };

  render() {
    return (
      <ul>
        <li>
          <Button color="inherit">
            <a href="#" className="navlink">
              Create Room
            </a>
          </Button>
        </li>
        <li>
          <Button color="inherit">
            <a href="/" className="navlink" onClick={this.handleLogoutClick}>
              Logout
            </a>
          </Button>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
