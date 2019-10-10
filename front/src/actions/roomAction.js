import { ADD_ROOM_VALUES } from "../constants/roomTypes";

export const addRoomValues = (values) => ({
  type: ADD_ROOM_VALUES,
  values
});
