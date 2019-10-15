import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 380,
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}));

const SigninModal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <h2>Modal</h2>
      </div>
    </Modal>
  );
};

export default SigninModal;
