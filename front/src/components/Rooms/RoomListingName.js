import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  editRoomRequest,
  updateRoomRequest
} from "../../store/actions/roomAction";

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

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    const params = {
      room: {
        listing_name: this.state.listing_name
      }
    };
    this.props.updateRoom(params, this.props.room.id);
    e.preventDefault();
  };

  render() {
    const { isLoading, room, user } = this.props;

    if (isLoading) {
      return null;
    } else {
      if (user.id !== room.user_id) {
        return <Redirect to="/" />;
      } else {
        return (
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="listing_name"
              label="Listing Name"
              defaultValue={room.listing_name}
              onChange={this.handleChange}
            />
            <Button type="submit" variant="outlined">
              更新
            </Button>
          </form>
        );
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.room.room,
    isLoading: state.room.isLoading,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoom: (id) => {
      dispatch(editRoomRequest(id));
    },
    updateRoom: (params, room_id) => {
      dispatch(updateRoomRequest(params, room_id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListingName);
