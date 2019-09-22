import React from "react";
import { connect } from "react-redux";
import { getRooms } from "../../store/actions/roomAction";
import RoomList from "../Rooms/RoomList";

class Main extends React.Component {
  componentDidMount() {
    this.props.getRooms();
  }

  render = () => {
    const { rooms } = this.props;

    return <RoomList rooms={rooms} />;
  };
}

const mapStateToProps = (state) => {
  return {
    rooms: state.room.rooms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: () => {
      dispatch(getRooms());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
