import { connect } from "react-redux";
import CreateRoom from "../../components/Rooms/CreateRoom";
import { addRoomValues } from "../../actions/roomAction";

const mapStateToProps = (state) => ({
  roomValues: state.room
});

const mapDispatchToProps = (dispatch) => ({
  addRoomValues: (values) => dispatch(addRoomValues(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoom);
