import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAction";

class SignedInLinks extends React.Component {
  handleLogoutClick = () => {
    this.props.logout();
  };

  render() {
    return (
      <ul className="right">
        <li>
          <a href="/">Create Room</a>
        </li>
        <li>
          <a href="/" onClick={this.handleLogoutClick}>
            ログアウト
          </a>
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
