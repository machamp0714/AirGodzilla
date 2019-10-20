import {connect} from "react-redux";
import LoggedInRequired from "../../components/Auth/LoggedInRequired";

const mapStateToProps = (state) => ({
  loggedInStatus: state.auth.loggedInStatus
});

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    WrappedComponent: ownProps.WrappedComponent
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInRequired);
