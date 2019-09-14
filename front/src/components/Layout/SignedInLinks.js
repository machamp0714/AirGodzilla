import React from "react";
import httpClient from "../Config/axios";

class SignedInLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick = () => {
    const { handleLogout } = this.props;
    httpClient
      .delete("http://localhost:3001/api/v1/logout")
      .then((response) => {
        handleLogout();
      })
      .catch((error) => {
        console.log(error);
      });
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

export default SignedInLinks;
