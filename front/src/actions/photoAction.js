import {
  PREVIEW_PHOTO,
  REMOVE_PHOTO,
  CLEAR_STORE
} from "../constants/photoTypes";

let nextId = 1;

export const previewPhoto = (url) => ({
  type: PREVIEW_PHOTO,
  id: nextId++,
  url
});

export const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  id
});

export const clearPhotoStore = () => ({
  type: CLEAR_STORE
});
