import {
  ADD_ROOM_VALUES,
  CREATE_ROOM,
  CREATE_ROOM_ERROR
} from "../constants/roomTypes";

const roomReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ROOM_VALUES:
      return { ...state, ...action.values };
    case CREATE_ROOM:
      console.log("create success!", action.response);
      return state;
    case CREATE_ROOM_ERROR:
      console.log("create error!", action.error);
      return state;
    default:
      return state;
  }
};

export default roomReducer;
