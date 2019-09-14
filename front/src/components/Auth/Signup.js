import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/actions/authAction";

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
    const { name, email, password } = this.state;
    const newUser = {
      user: {
        name: name,
        email: email,
        password: password
      }
    };
    this.props.signup(newUser);
    e.preventDefault();
  };

  render() {
    console.log(this.props.loggedInStatus);
    if (this.props.loggedInStatus) {
      return <Redirect to="/" />;
    }
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

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.auth.loggedInStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => {
      dispatch(signup(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
