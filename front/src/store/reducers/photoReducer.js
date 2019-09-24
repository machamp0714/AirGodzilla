import {
  CREATE_PHOTO_SUCCESS,
  CREATE_PHOTO_ERROR,
  GET_PHOTOS_SUCCESS
} from "../../utils/actionTypes";

const initState = {
  photos: []
};

const photoReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PHOTOS_SUCCESS:
      console.log(state);
      return {
        ...state,
        photos: action.photos
      };
    case CREATE_PHOTO_ERROR:
      return state;
    case CREATE_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.photo
      };
    default:
      return state;
  }
};

export default photoReducer;
