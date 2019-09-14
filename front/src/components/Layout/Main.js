import React from "react";

import { connect } from "react-redux";
import { getRooms } from "../../store/actions/roomAction";

class Main extends React.Component {
  componentDidMount() {
    this.props.getRooms();
  }

  render = () => {
    console.log(this.props.rooms);
    return <div>RoomList</div>;
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
