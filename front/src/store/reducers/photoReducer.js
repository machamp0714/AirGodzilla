import {
  CREATE_PHOTO_SUCCESS,
  CREATE_PHOTO_ERROR
} from "../../utils/actionTypes";

const initState = {
  photo: {}
};

const photoReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PHOTO_ERROR:
      console.log(action.error);
      return state;
    case CREATE_PHOTO_SUCCESS:
      console.log(action.photo);
      return {
        ...state,
        photo: action.photo
      };
    default:
      return state;
  }
};

export default photoReducer;
