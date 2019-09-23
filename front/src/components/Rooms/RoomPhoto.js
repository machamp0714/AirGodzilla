import React from "react";
import { connect } from "react-redux";
import { getRoom } from "../../store/actions/roomAction";
import { createPhoto } from "../../store/actions/photoAction";
import { Link, Redirect } from "react-router-dom";

class RoomPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  UNSAFE_componentWillMount() {
    this.props.getRoom(this.props.match.params.id);
  }

  handleChange = (e) => {
    let files = e.target.files; // FileListオブジェクト
    let reader = new FileReader();
    // 画像をbase64にエンコードする
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.setState({ image: reader.result });
    };
  };

  handleSubmit = (e) => {
    const room_id = this.props.room.id;
    const params = {
      photo: {
        image: this.state.image
      }
    };

    this.props.createPhoto(params, room_id);
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
            to={{ pathname: "/", state: { message: "Not Permission" } }}
          />
        );
      } else if (room.photos !== undefined) {
        return (
          <div className="container">
            <div className="left-column">
              <Link to={"/room/" + room.id + "/photo"}>Photo</Link>
            </div>

            <div className="right-column">
              <h2>Photo</h2>
              <form onSubmit={this.handleSubmit}>
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={this.handleChange}
                />
                <input type="submit" value="update" />
              </form>

              <img src={room.photos[0].image} alt="Room Photos" />
            </div>
          </div>
        );
      } else {
        return null;
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
    createPhoto: (params, room_id) => {
      dispatch(createPhoto(params, room_id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomPhoto);
