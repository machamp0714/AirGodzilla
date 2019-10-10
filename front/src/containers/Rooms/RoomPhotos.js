import { previewPhoto } from "../../actions/photoAction";
import RoomPhotos from "../../components/Rooms/RoomPhotos";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  photos: state.photo
});

const mapDispatchToProps = (dispatch) => ({
  previewPhoto: (photo) => dispatch(previewPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomPhotos);
