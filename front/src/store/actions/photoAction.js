import axios from "axios";
import httpClient from "../../components/Config/axios";
import {
  CREATE_PHOTO_SUCCESS,
  CREATE_PHOTO_ERROR,
  GET_PHOTOS_SUCCESS
} from "../../utils/actionTypes";

const getPhotosSuccess = (photos) => ({
  type: GET_PHOTOS_SUCCESS,
  photos: photos
});

const createPhotoSuccess = (photo) => ({
  type: CREATE_PHOTO_SUCCESS,
  photo: photo
});

const createPhotoError = (error) => ({
  type: CREATE_PHOTO_ERROR,
  error
});

export const getPhotos = (room_id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/v1/rooms/" + room_id + "/photos")
      .then((response) => {
        dispatch(getPhotosSuccess(response.data.photos));
      });
  };
};

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
