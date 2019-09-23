import httpClient from "../../components/Config/axios";
import {
  CREATE_PHOTO_SUCCESS,
  CREATE_PHOTO_ERROR
} from "../../utils/actionTypes";

const createPhotoSuccess = (photo) => ({
  type: CREATE_PHOTO_SUCCESS,
  photo: photo
});

const createPhotoError = (error) => ({
  type: CREATE_PHOTO_ERROR,
  error
});

export const createPhoto = (params, room_id) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/rooms/" + room_id + "/photos", params)
      .then((response) => {
        dispatch(createPhotoSuccess(response.data.photo));
      })
      .catch((error) => {
        dispatch(createPhotoError(error));
      });
  };
};
