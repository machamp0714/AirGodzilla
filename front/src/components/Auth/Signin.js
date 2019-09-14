import React from "react";
import httpClient from "../Config/axios";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;

    httpClient
      .post("http://localhost:3001/api/v1/login", {
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response.data);
        this.props.handleSuccessfulAuth(response.data);
      })
      .catch(
        (error) => {
          console.log(error);
        },
        { withCredentials: true }
      );
    e.preventDefault();
  };

  render() {
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
