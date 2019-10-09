import { PREVIEW_PHOTO, INIT_PHOTOS } from "../constants/photoTypes";

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_PHOTOS:
      return [...action.photos];
    case PREVIEW_PHOTO:
      return [...state, action.photo];
    default:
      return state;
  }
};

export default photoReducer;
