import { PREVIEW_PHOTO } from "../constants/photoTypes";

export const previewPhoto = (photo) => ({
  type: PREVIEW_PHOTO,
  photo
});
