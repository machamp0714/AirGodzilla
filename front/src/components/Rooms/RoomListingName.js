import React from "react";

class RoomListingName extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    return <div>Edit Room</div>;
  }
}

export default RoomListingName;
