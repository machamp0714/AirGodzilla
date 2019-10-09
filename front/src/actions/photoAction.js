import { PREVIEW_PHOTO, INIT_PHOTOS } from "../constants/photoTypes";

export const initPhotos = (photos) => ({
  type: INIT_PHOTOS,
  photos
});

export const previewPhoto = (photo) => ({
  type: PREVIEW_PHOTO,
  photo
});
