import React from "react";
import { connect } from "react-redux";
import { loggedIn } from "../../store/actions/authAction";

class UserOnly extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.loggedIn();
  }

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return null;
    } else {
      return <div>aaaa</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoading: state.auth.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: () => {
      dispatch(loggedIn);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOnly);
