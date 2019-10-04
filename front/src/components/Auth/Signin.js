import React from "react";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;
    this.props.login({
      email: email,
      password: password
    });
    e.preventDefault();
  };

  render() {
    if (this.props.loggedInStatus) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            placeholder="メールアドレス"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            placeholder="パスワード"
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="ログイン" />
      </form>
    );
  }
}
export default Signin;
