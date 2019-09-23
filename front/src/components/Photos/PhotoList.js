import React from "react";

const PhotoList = ({ photos }) => {
  if (photos.length > 0) {
    return photos.map((photo, key) => {
      return <img src={photo.image} alt="Room Photos" key={key} />;
    });
  } else {
    return null;
  }
};

export default PhotoList;
