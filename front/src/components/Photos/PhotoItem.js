import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const PhotoItem = ({ photo, id }) => {
  const handleClick = () => {};

  return (
    <li>
      <img src={photo} alt="プレビュー" />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

export default PhotoItem;
