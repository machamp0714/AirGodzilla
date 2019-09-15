import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/actions/authAction";
import {
  CssBaseline,
  Container,
  Typography,
  FormGroup,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";

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
    if (this.props.loggedInStatus) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h4">Sign Up</Typography>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type="password"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button type="submit" color="primary" variant="outlined">
              submit
            </Button>
          </form>
        </Container>
      </React.Fragment>
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
