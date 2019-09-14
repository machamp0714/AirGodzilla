import React from "react";
import httpClient from "../Config/axios";
import RoomList from "../Rooms/RoomList";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    httpClient
      .get("http://localhost:3001/api/v1/rooms")
      .then((response) => {
        this.setState({ rooms: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render = () => {
    return <RoomList rooms={this.state.rooms} />;
  };
}
