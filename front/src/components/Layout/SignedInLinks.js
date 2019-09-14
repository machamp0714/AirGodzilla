import React from "react";

class SignedInLinks extends React.Component {
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
