import React from "react";
import { connect } from "react-redux";
import { editRoomRequest } from "../../store/actions/roomAction";

import { TextField, Button } from "@material-ui/core";

class RoomListingName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_name: ""
    };
  }

  UNSAFE_componentWillMount() {
    this.props.getRoom(this.props.match.params.id);
  }

  render() {
    return (
      <form>
        <TextField id="listing_name" label="Listing Name" defaultValue="foo" />
        <Button type="submit" variant="outlined">
          更新
        </Button>
      </form>
    );
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
