import { connect } from "react-redux";
import { logout } from "../../actions/authAction";
import SignedInLinks from "../../components/Layout/SignedInLinks";

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
