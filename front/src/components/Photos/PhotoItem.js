import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const PhotoItem = ({ photo, removePhoto }) => {
  const handleClick = (id) => {
    removePhoto(id);
  };

  return (
    <li>
      <img src={photo.url} alt="プレビュー" />
      <IconButton
        onClick={() => {
          handleClick(photo.id);
        }}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

export default PhotoItem;
