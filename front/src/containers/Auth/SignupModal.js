import { connect } from "react-redux";
import SignupModal from "../../components/Modal/SignupModal";
import { signup } from "../../actions/authAction";

const mapDispatchToProps = (dispatch, ownProps) => ({
  open: ownProps.open,
  handleClose: ownProps.handleClose,
  signup: (params) => dispatch(signup(params))
});

export default connect(
  null,
  mapDispatchToProps
)(SignupModal);
