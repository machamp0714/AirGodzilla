import {connect} from "react-redux";
import Signin from "../../components/Auth/Signin";
import {login} from "../../actions/authAction";

const mapStateToProps = (state) => ({
  loggedInStatus: state.auth.loggedInStatus
});

const madDispatchToProps = (dispatch) => ({
  login: (params) => dispatch(login(params))
});

export default connect(
  mapStateToProps,
  madDispatchToProps
)(Signin);
