import { connect } from "react-redux";
import { createRoom } from "../../actions/roomAction";
import { clearPhotoStore } from "../../actions/photoAction";
import RoomConfirm from "../../components/Rooms/RoomConfirm";

const mapStateToProps = (state) => ({
  roomValues: state.room.values,
  photoValues: state.photo,
  isCreated: state.room.isCreated
});

const mapDispatchToProps = (dispatch) => ({
  createRoom: (params) => dispatch(createRoom(params)),
  clearPhotoStore: () => dispatch(clearPhotoStore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomConfirm);
