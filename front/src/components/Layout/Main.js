import React from "react";
import axios from "axios";

export default class Main extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/rooms")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render = () => {
    return <div>Main</div>;
  };
}
