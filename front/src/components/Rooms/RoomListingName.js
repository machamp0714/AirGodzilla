import React from "react";
import { connect } from "react-redux";
import { editRoomRequest } from "../../store/actions/roomAction";

class RoomListingName extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.getRoom(this.props.match.params.id);
  }

  render() {
    return <div>Edit Room</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.room.room
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoom: (id) => {
      dispatch(editRoomRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListingName);
