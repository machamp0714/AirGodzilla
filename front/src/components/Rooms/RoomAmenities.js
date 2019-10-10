import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { addRoomValues } from "../../actions/roomAction";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 40
  },
  buttonFooter: {
    marginTop: 20,
    display: "flex"
  },
  buttonNext: {
    marginLeft: "auto"
  }
}));

const RoomAmenities = ({ history, roomValues, addRoomValues }) => {
  const classes = useStyles();

  const [values, setState] = React.useState({
    is_tv: roomValues.is_tv || false,
    is_internet: roomValues.is_internet || false,
    is_kitchen: roomValues.is_kitchen || false,
    is_air: roomValues.is_air || false,
    is_heating: roomValues.is_heating || false
  });
  const [isNext, onSwitch] = React.useState(false);

  const handleChange = (name) => (e) => {
    setState({ ...values, [name]: e.target.checked });
  };

  const handlePrevButtonClick = () => {
    history.push("/become-a-host/listing-name");
  };

  const handleNextButtonClick = () => {
    addRoomValues(values);
    onSwitch(!isNext);
  };

  if (isNext) {
    return <Redirect to="/become-a-host/photos" />;
  }

  return (
    <Container className={classes.container} width="md">
      <FormControl>
        <FormLabel>Ammenities</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.is_tv}
                onChange={handleChange("is_tv")}
                value={values.is_tv}
                color="primary"
              />
            }
            label="テレビ"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={values.is_internet}
                onChange={handleChange("is_internet")}
                value={values.is_internet}
                color="primary"
              />
            }
            label="インターネット"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={values.is_kitchen}
                onChange={handleChange("is_kitchen")}
                value={values.is_kitchen}
                color="primary"
              />
            }
            label="キッチン"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={values.is_air}
                onChange={handleChange("is_air")}
                value={values.is_air}
                color="primary"
              />
            }
            label="エアコン"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={values.is_heating}
                onChange={handleChange("is_heating")}
                value={values.is_heating}
                color="primary"
              />
            }
            label="暖房器具"
          />
        </FormGroup>
      </FormControl>

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

const mapStateToProps = (state) => ({
  roomValues: state.room
});

const mapDispatchToProps = (dispatch) => ({
  addRoomValues: (values) => dispatch(addRoomValues(values))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(RoomAmenities);
