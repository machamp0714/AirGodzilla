import { connect } from "react-redux";
import { createRoom } from "../../actions/roomAction";
import RoomConfirm from "../../components/Rooms/RoomConfirm";

const mapStateToProps = (state) => ({
  roomValues: state.room,
  photoValues: state.photo
});

const mapDispatchToProps = (dispatch) => ({
  createRoom: (params) => dispatch(createRoom(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomConfirm);
