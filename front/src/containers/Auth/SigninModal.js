import { connect } from "react-redux";
import SigninModal from "../../components/Modal/SigninModal";
import { login } from "../../actions/authAction";

const mapDispatchToProps = (dispatch, ownProps) => ({
  open: ownProps.open,
  handleClose: ownProps.handleClose,
  login: (params) => dispatch(login(params))
});

export default connect(
  null,
  mapDispatchToProps
)(SigninModal);
