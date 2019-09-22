import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createRoomRequest } from "../../store/actions/roomAction";

import { withStyles } from "@material-ui/styles";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";

const styles = {
  form: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    minWidth: 140,
    marginRight: 20
  },
  button: {
    marginTop: 20
  }
};

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home_type: "",
      room_type: "",
      accommodate: "",
      bed_room: "",
      bath_room: "",
      instant: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    const {
      home_type,
      room_type,
      accommodate,
      bed_room,
      bath_room,
      instant
    } = this.state;

    this.props.createRoom({
      room: {
        home_type: home_type,
        room_type: room_type,
        accommodate: accommodate,
        bed_room: bed_room,
        bath_room: bath_room,
        instant: instant
      }
    });

    e.preventDefault();
  };

  render() {
    const {
      home_type,
      room_type,
      accommodate,
      bed_room,
      bath_room,
      instant
    } = this.state;
    const { classes, room } = this.props;

    if (Object.keys(room).length !== 0) {
      return <Redirect to={"/room/" + room.id + "/listig_name"} />;
    } else {
      return (
        <Container>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className={classes.form}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="home_type">Home Type</InputLabel>
                <Select
                  value={home_type}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "home_type",
                    id: "home_type"
                  }}
                >
                  <MenuItem value={"private"}>private</MenuItem>
                  <MenuItem value={"share"}>share</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="room_type">Room Type</InputLabel>
                <Select
                  value={room_type}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "room_type",
                    id: "room_type"
                  }}
                >
                  <MenuItem value={"relax"}>relax</MenuItem>
                  <MenuItem value={"beautiful"}>beautiful</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="accommodate">Accommodate</InputLabel>
                <Select
                  value={accommodate}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "accommodate",
                    id: "accommodate"
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="bed_room">Bed Room</InputLabel>
                <Select
                  value={bed_room}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "bed_room",
                    id: "bed_room"
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="bath_room">Bath Room</InputLabel>
                <Select
                  value={bath_room}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "bath_room",
                    id: "bath_room"
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="instant">Instant</InputLabel>
                <Select
                  value={instant}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "instant",
                    id: "instant"
                  }}
                >
                  <MenuItem value={0}>request</MenuItem>
                  <MenuItem value={1}>instant</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.button}>
              <Button
                className={classes.button}
                type="submit"
                color="primary"
                variant="outlined"
              >
                Submit
              </Button>
            </div>
          </form>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.room.room
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoom: (newRoom) => {
      dispatch(createRoomRequest(newRoom));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateRoom));
