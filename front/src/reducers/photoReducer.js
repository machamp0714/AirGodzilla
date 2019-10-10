import { PREVIEW_PHOTO } from "../constants/photoTypes";

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case PREVIEW_PHOTO:
      return [...state, action.photo];
    default:
      return state;
  }
};

export default photoReducer;
