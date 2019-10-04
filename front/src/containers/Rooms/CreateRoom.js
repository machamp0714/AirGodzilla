import { connect } from "react-redux";
import { createRoom } from "../../actions/roomAction";
import CreateRoom from "../../components/Rooms/CreateRoom";

const mapDispatchToProps = (dispatch) => ({
  createRoom: (params) => dispatch(createRoom(params))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateRoom);
