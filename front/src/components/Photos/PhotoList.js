import React from "react";

const PhotoList = ({ photos }) => {
  if (photos.length > 0) {
    return photos.map((photo) => {
      return <img src={photo.image} alt="Room Photos" key={photo.id} />;
    });
  } else {
    return null;
  }
};

export default PhotoList;
