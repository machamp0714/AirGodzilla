import React from "react";
import RoomSummary from "./RoomSummary";

const RoomList = ({ rooms }) => {
  return rooms.map((room) => {
    return <RoomSummary key={room.id} room={room} />;
  });
};

export default RoomList;
