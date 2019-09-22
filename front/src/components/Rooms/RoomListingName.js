import React from "react";
import { connect } from "react-redux";
import { getRoom } from "../../store/actions/roomAction";

class RoomListingName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_name: this.props.room.listing_name
    };
  }

  UNSAFE_componentWillMount() {
    this.props.getRoom(this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <h2>Listing Name</h2>

        <form>
          <input
            id="listing_name"
            type="text"
            placeholder="listing name"
            value={this.state.listing_name}
          />
          <input type="submit" value="update" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.room.isLoading,
    room: state.room.room
  };
};

const mapDispatchToProps = (dispach) => {
  return {
    getRoom: (room_id) => {
      dispach(getRoom(room_id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListingName);
