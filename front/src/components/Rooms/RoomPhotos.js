import React from "react";
import { withCookies } from "react-cookie";
import { withRouter } from "react-router";
import { compose } from "recompose";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20
  },
  input: {
    display: "none"
  },
  label: {
    marginBottom: 20
  }
}));

const RoomPhotos = ({ photos, previewPhoto }) => {
  const classes = useStyles();

  const setImage = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    // 画像をbase64にエンコード
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      previewPhoto(reader.result);
    };
  };

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
        {!!photos &&
          photos.map((photo, index) => (
            <img src={photo} alt="写真のプレビュー" key={index} />
          ))}
      </FormControl>
    </Container>
  );
};

export default compose(
  withCookies,
  withRouter
)(RoomPhotos);
