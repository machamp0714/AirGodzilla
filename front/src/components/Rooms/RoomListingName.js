import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Redirect } from "react-router-dom";
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

const RoomListingName = ({ history, roomValues, addRoomValues }) => {
  const classes = useStyles();

  const [values, setState] = React.useState({
    listing_name: roomValues.listing_name || "",
    address: roomValues.address || "",
    summary: roomValues.summary || "",
    price: roomValues.price || ""
  });
  const [isNext, onSwitch] = React.useState(false);

  const handleChange = (e) => {
    // eventオブジェクトに非同期でアクセスするとエラーが出る。
    e.persist();

    setState((oldValues) => ({
      ...oldValues,
      [e.target.id]: e.target.value
    }));
  };

  const handleNextButtonClick = () => {
    addRoomValues(values);
    onSwitch(!isNext);
  };

  const handlePrevButtonClick = () => {
    history.push("/become-a-host");
  };

  if (isNext) {
    return <Redirect to="/become-a-host/ammenities" />;
  }
  return (
    <Container className={classes.container} width="md">
      <TextField
        id="listing_name"
        value={values.listing_name}
        onChange={handleChange}
        label="部屋の名前"
        fullWidth
        variant="outlined"
      />

      <TextField
        id="summary"
        value={values.summary}
        onChange={handleChange}
        label="部屋の説明"
        multiline
        rows="6"
        variant="outlined"
      />

      <TextField
        id="address"
        value={values.address}
        onChange={handleChange}
        label="住所"
        fullWidth
        variant="outlined"
      />

      <TextField
        id="price"
        value={values.price}
        onChange={handleChange}
        label="価格"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">¥</InputAdornment>
        }}
      />

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
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(RoomListingName);
