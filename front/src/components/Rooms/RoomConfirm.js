import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    textAlign: "center"
  }
}));

const RoomConfirm = ({ roomValues, photoValues, createRoom }) => {
  const classes = useStyles();

  const handleClick = () => {
    const photos = photoValues.map((value) => value.url);
    const params = {
      room: {
        ...roomValues,
        photos: photos
      }
    };
    console.log(params);
  };

  return (
    <Container className={classes.root} width="md">
      <form encType="multipart/form-data">
        <Button variant="contained" color="primary" onClick={handleClick}>
          この内容で作成する
        </Button>
      </form>
    </Container>
  );
};

export default withRouter(RoomConfirm);
