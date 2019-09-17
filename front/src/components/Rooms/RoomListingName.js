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

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { isLoading, room } = this.props;

    if (isLoading) {
      return null;
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

const mapStateToProps = (state) => {
  return {
    room: state.room.room,
    isLoading: state.room.isLoading
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
