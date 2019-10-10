import { connect } from "react-redux";
import PhotoItem from "../../components/Photos/PhotoItem";
import { removePhoto } from "../../actions/photoAction";

const mapDispatchToProps = (dispatch, ownProps) => ({
  photo: ownProps.photo,
  removePhoto: (id) => dispatch(removePhoto(id))
});

export default connect(
  null,
  mapDispatchToProps
)(PhotoItem);
