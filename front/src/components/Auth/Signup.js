import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const params = {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    };

    axios
      .post("http://localhost:3001/api/v1/signup", params)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
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
            onChange={this.handleChange}
          />
        </div>

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

        <input type="submit" value="送信" />
      </form>
    );
  }
}

export default Signup;
