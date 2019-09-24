import React from "react";
import { connect } from "react-redux";
import { getRoom } from "../../store/actions/roomAction";
import { getPhotos, createPhoto } from "../../store/actions/photoAction";
import { Link, Redirect } from "react-router-dom";
import PhotoList from "../Photos/PhotoList";

class RoomPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  UNSAFE_componentWillMount() {
    const { getRoom, getPhotos } = this.props;

    getRoom(this.props.match.params.id);
    getPhotos(this.props.match.params.id);
  }

  handleChange = (e) => {
    let file = e.target.files[0];

    if (
      file.type !== "image/jpg" &&
      file.type !== "image/jpeg" &&
      file.type !== "image/png"
    ) {
      return;
    }

    let canvas = document.getElementById("preview");
    let ctx = canvas.getContext("2d");
    let image = new Image();
    const MAX_WIDTH = 250;
    const MAX_HEIGHT = 250;

    image.onload = () => {
      let iw = image.width;
      let ih = image.height;
      let ratio = Math.min(MAX_WIDTH / iw, MAX_HEIGHT / ih);
      let iwScaled = iw * ratio;
      let ihScaled = ih * ratio;

      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx.drawImage(image, 0, 0, iwScaled, ihScaled);

      const resizeData = canvas.toDataURL();

      this.setState({ image: resizeData });
    };
    image.src = URL.createObjectURL(file);
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
    const { isFetching, user, room, photos } = this.props;
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
      } else {
        return (
          <div className="container">
            <div className="left-column">
              <Link to={"/room/" + room.id + "/photo"}>Photo</Link>
            </div>

            <div className="right-column">
              <h2>Photo</h2>
              <canvas id="preview" width="0" height="0"></canvas>
              <form onSubmit={this.handleSubmit}>
                <input id="photo" type="file" onChange={this.handleChange} />
                <input type="submit" value="update" />
              </form>

              <PhotoList photos={photos} />
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
    user: state.auth.user,
    photos: state.photo.photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoom: (room_id) => {
      dispatch(getRoom(room_id));
    },
    getPhotos: (room_id) => {
      dispatch(getPhotos(room_id));
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
