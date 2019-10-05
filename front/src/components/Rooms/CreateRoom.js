import React from "react";
import { withCookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const CreateRoom = ({ cookies }) => {
  const classes = useStyles();
  const [values, setState] = React.useState({
    home_type: cookies.get("roomValues").home_type || "住宅",
    room_type: cookies.get("roomValues").room_type || "貸切",
    accommodate: cookies.get("roomValues").accommodate || 4,
    bed_room: cookies.get("roomValues").bed_room || 2,
    bath_room: cookies.get("roomValues").bath_room || 1
  });
  const [isNext, onSwitch] = React.useState(false);

  const setCookies = () => {
    const currentRoomValues = cookies.get("roomValues");
    cookies.set("roomValues", { ...currentRoomValues, ...values });
  };

  const handleChange = (e) => {
    // oldValuesをスプレッド展開しないとダメ。
    // stateがundefinedになると、Warning: A component is changing a controlled input of type hidden to be uncontrolled.というエラーが出る。
    setState((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = () => {
    setCookies();
    onSwitch(!isNext);
  };

  if (isNext) {
    return <Redirect to="/become-a-host/listing-name" />;
  }
  return (
    <Container maxWidth="md">
      <FormControl className={classes.formControl}>
        <InputLabel id="room_type">部屋のタイプ</InputLabel>
        <Select
          value={values.room_type}
          onChange={handleChange}
          inputProps={{
            name: "room_type",
            id: "room_type"
          }}
        >
          <MenuItem value="貸切">まるまる貸切</MenuItem>
          <MenuItem value="シェアルーム">シェアルーム</MenuItem>
          <MenuItem value="個室">個室</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="home_type">カテゴリ</InputLabel>
        <Select
          value={values.home_type}
          onChange={handleChange}
          inputProps={{
            name: "home_type",
            id: "home_type"
          }}
        >
          <MenuItem value="マンション・アパート">マンション・アパート</MenuItem>
          <MenuItem value="住宅">住宅</MenuItem>
          <MenuItem value="デザイナーズホテル">デザイナーズホテル</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="accommodate">最大定員</InputLabel>
        <Select
          value={values.accommodate}
          onChange={handleChange}
          inputProps={{
            name: "accommodate",
            id: "accommodate"
          }}
        >
          <MenuItem value={1}>最大定員: 1名</MenuItem>
          <MenuItem value={2}>最大定員: 2名</MenuItem>
          <MenuItem value={3}>最大定員: 3名</MenuItem>
          <MenuItem value={4}>最大定員: 4名</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="bed_room">ベッドルーム</InputLabel>
        <Select
          value={values.bed_room}
          onChange={handleChange}
          name="bed_room"
          id="bed_room"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="bath_room">バスルーム</InputLabel>
        <Select
          value={values.bath_room}
          onChange={handleChange}
          name="bath_room"
          id="bath_room"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>

      <div className="footer">
        <Button onClick={handleClick} variant="contained" color="primary">
          次へ
        </Button>
      </div>
    </Container>
  );
};

export default withCookies(CreateRoom);
