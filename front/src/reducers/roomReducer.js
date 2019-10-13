import {
  ADD_ROOM_VALUES,
  CREATE_ROOM,
  CREATE_ROOM_ERROR,
  CLEAR_STORE
} from "../constants/roomTypes";

const initState = {
  room: {},
  isCreated: false
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ROOM_VALUES:
      return { ...state.room, ...action.values };
    case CREATE_ROOM:
      console.log("create success!", action.response);
      return { isCreated: true };
    case CREATE_ROOM_ERROR:
      console.log("create error!", action.error);
      return state;
    case CLEAR_STORE:
      return (state.room = {});
    default:
      return state;
  }
};

export default roomReducer;
