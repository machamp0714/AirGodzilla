import { ADD_ROOM_VALUES } from "../constants/roomTypes";

const roomReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ROOM_VALUES:
      return { ...state, ...action.values };
    default:
      return state;
  }
};

export default roomReducer;
