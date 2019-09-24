import React from "react";
import { connect } from "react-redux";
import { getRoom, updateRoomRequest } from "../../store/actions/roomAction";
import { Link, Redirect } from "react-router-dom";

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
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    const params = {
      room: {
        listing_name: this.state.listing_name
      }
    };
    const room_id = this.props.room.id;

    this.props.updateRoomRequest(params, room_id);
    e.preventDefault();
  };

  render() {
    const { isFetching, user, room } = this.props;

    if (isFetching) {
      return null;
    } else {
      if (user.id !== room.user_id) {
        return (
          // Redirect先のComponentにおいてthis.props.location.state.messageでアクセスできる。
          <Redirect
            to={{ pathname: "/", state: { message: "Not Permission!" } }}
          />
        );
      } else {
        return (
          <div className="container">
            <div className="left-column">
              <Link to={"/room/" + room.id + "/photo"}>Photo</Link>
            </div>

            <div className="right-column">
              <h2>Listing Name</h2>

              <form onSubmit={this.handleSubmit}>
                <input
                  id="listing_name"
                  type="text"
                  placeholder="listing name"
                  value={this.state.listing_name}
                  onChange={this.handleChange}
                />
                <input type="submit" value="update" />
              </form>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.room.isFetching,
    room: state.room.room,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoom: (room_id) => {
      dispatch(getRoom(room_id));
    },
    updateRoomRequest: (params, room_id) => {
      dispatch(updateRoomRequest(params, room_id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListingName);