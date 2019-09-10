import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  render = () => {
    return <h1>navbar</h1>;
  };
}

export default Navbar;
