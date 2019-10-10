import React from "react";
import PhotoItem from "./PhotoItem";

const PhotoList = ({ photos }) => {
  return (
    <div>
      {!!photos &&
        photos.map((photo) => (
          <PhotoItem photo={photo.url} id={photo.id} key={photo.id} />
        ))}
    </div>
  );
};

export default PhotoList;
