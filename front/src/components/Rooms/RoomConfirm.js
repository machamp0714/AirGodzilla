import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    textAlign: "center"
  },
  placeholder: {
    height: 40,
    textAlign: "center",
    marginTop: 20
  }
}));

const RoomConfirm = ({
  roomValues,
  photoValues,
  createRoom,
  clearPhotoStore,
  isCreated,
  loading
}) => {
  const classes = useStyles();

  const handleClick = () => {
    const photos = photoValues.map((value) => value.url);
    const params = {
      room: {
        ...roomValues,
        photos_attributes: photos
      }
    };
    createRoom(params);
  };

  if (isCreated) {
    clearPhotoStore();

    return <Redirect to="/" />;
  }

  if (loading) {
    return (
      <div className={classes.placeholder}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? "500ms" : "0ms"
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </div>
    );
  } else {
    return (
      <Container className={classes.root} width="md">
        <form encType="multipart/form-data">
          <Button variant="contained" color="primary" onClick={handleClick}>
            この内容で作成する
          </Button>
        </form>
      </Container>
    );
  }
};

export default withRouter(RoomConfirm);
