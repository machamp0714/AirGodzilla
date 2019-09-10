import React from "react";

class RoomSummary extends React.Component {
  render = () => {
    return <div className="listing-name">{this.props.room.listing_name}</div>;
  };
}

export default RoomSummary;
