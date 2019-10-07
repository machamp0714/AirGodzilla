import React, { useEffect } from "react";
import { withCookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttonFooter: {
    marginTop: 20,
    display: "flex"
  },
  buttonNext: {
    marginLeft: "auto"
  }
}));

const RoomListingName = ({ cookies }) => {
  const classes = useStyles();

  const [values, setState] = React.useState({
    listing_name: "",
    address: ""
  });
  const [isNext, onSwitch] = React.useState(false);

  useEffect(() => {
    if (cookies.get("roomValues") !== undefined) {
      setState(cookies.get("roomValues"));
    }
  }, [cookies]);

  const setCookies = () => {
    const currentRoomValues = cookies.get("roomValues");
    cookies.set("roomValues", { ...currentRoomValues, ...values });
  };

  const handleChange = (e) => {
    // eventオブジェクトに非同期でアクセスするとエラーが出る。
    e.persist();

    setState((oldValues) => ({
      ...oldValues,
      [e.target.id]: e.target.value
    }));
  };

  const handleClick = () => {
    setCookies();
    onSwitch(!isNext);
  };

  const handlePrevButton = () => {
    return <Redirect to="/become-a-host" />;
  };

  if (isNext) {
    return <Redirect to="/" />;
  }
  return (
    <Container width="md">
      <TextField
        id="listing_name"
        value={values.listing_name}
        onChange={handleChange}
        label="部屋の名前"
        fullWidth
      />

      <TextField
        id="address"
        value={values.address}
        onChange={handleChange}
        label="住所"
        fullWidth
      />

      <div className={classes.buttonFooter}>
        <Button onClick={handlePrevButton} variant="contained" color="primary">
          戻る
        </Button>
        <Button
          className={classes.buttonNext}
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          次へ
        </Button>
      </div>
    </Container>
  );
};

export default withCookies(RoomListingName);
