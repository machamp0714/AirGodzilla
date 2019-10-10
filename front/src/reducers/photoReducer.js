import { PREVIEW_PHOTO, REMOVE_PHOTO } from "../constants/photoTypes";

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case PREVIEW_PHOTO:
      return [...state, { id: action.id, url: action.url }];
    case REMOVE_PHOTO:
      return state.filter((photo) => action.id !== photo.id);
    default:
      return state;
  }
};

export default photoReducer;
