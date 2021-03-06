import React from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { compose } from "recompose";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import PhotoList from "../Photos/PhotoList";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20
  },
  input: {
    display: "none"
  },
  label: {
    marginBottom: 20
  },
  buttonFooter: {
    marginTop: 20,
    display: "flex"
  },
  buttonNext: {
    marginLeft: "auto"
  }
}));

const RoomPhotos = ({ photos, previewPhoto, history }) => {
  const classes = useStyles();

  const [isNext, onSwitch] = React.useState(false);

  const handlePrevButtonClick = () => {
    history.push("/become-a-host/ammenities");
  };

  const handleNextButtonClick = () => {
    onSwitch(!isNext);
  };

  const setImage = (e) => {
    const file = e.target.files[0];
    if (
      file.type !== "image/jpg" &&
      file.type !== "image/jpeg" &&
      file.type !== "image/png"
    ) {
      return;
    }
    const MAX_WIDTH = 200;
    const MAX_HEIGHT = 200;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      const scale = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
      const iwScaled = width * scale;
      const ihScaled = height * scale;

      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx.drawImage(image, 0, 0, iwScaled, ihScaled);

      const resized = canvas.toDataURL("image/jpeg");

      previewPhoto(resized);
    };
    image.src = URL.createObjectURL(file);
  };

  if (isNext) {
    return <Redirect to="/become-a-host/confirm" />;
  }

  return (
    <Container width="md" className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.label}>
          写真を添付する
        </FormLabel>
        <input
          id="photos"
          type="file"
          accept="image/png,image/jpeg, image/jpg"
          onChange={setImage}
          className={classes.input}
        />
        <label htmlFor="photos">
          <Button color="primary" variant="contained" component="span">
            写真を選択
          </Button>
        </label>
      </FormControl>

      <PhotoList photos={photos} />

      <div className={classes.buttonFooter}>
        <Button
          onClick={handlePrevButtonClick}
          variant="contained"
          color="primary"
        >
          戻る
        </Button>
        <Button
          className={classes.buttonNext}
          onClick={handleNextButtonClick}
          variant="contained"
          color="primary"
        >
          次へ
        </Button>
      </div>
    </Container>
  );
};

export default compose(withRouter)(RoomPhotos);
