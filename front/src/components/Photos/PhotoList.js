import React from "react";
import PhotoItem from "../../containers/Photos/PhotoItem";

const PhotoList = ({ photos }) => {
  return (
    <div>
      {!!photos &&
        photos.map((photo) => <PhotoItem photo={photo} key={photo.id} />)}
    </div>
  );
};

export default PhotoList;
