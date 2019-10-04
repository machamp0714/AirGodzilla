import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/authAction";
import App from "../App";

const mapStateToProps = (state) => ({
  loggedInStatus: state.auth.loggedInStatus,
  user: state.auth.user,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(authActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
