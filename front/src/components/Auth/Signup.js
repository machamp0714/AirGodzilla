import React from "react";
import httpClient from "../Config/axios";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const { name, email, password } = this.state;

    httpClient
      .post("http://localhost:3001/api/v1/signup", {
        user: {
          name: name,
          email: email,
          password: password
        }
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">ユーザー名</label>
          <input
            type="text"
            id="name"
            placeholder="ユーザー名"
            required
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            placeholder="メールアドレス"
            required
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            placeholder="パスワード"
            required
            onChange={this.handleChange}
          />
        </div>

        <input type="submit" value="送信" />
      </form>
    );
  }
}

export default Signup;
