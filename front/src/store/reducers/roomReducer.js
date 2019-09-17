import * as actionTypes from "../../utils/actionTypes";

const initState = {
  rooms: []
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ROOMS_ERROR":
      console.log(action.error);
      return state;
    case "GET_ROOMS_SUCCESS":
      return {
        ...state,
        rooms: action.rooms
      };
    case actionTypes.CREATE_ROOM_FAILURE:
      return state;
    case actionTypes.CREATE_ROOM_SUCCESS:
      return {
        ...state,
        room: action.room
      };
    default:
      return state;
  }
};

export default roomReducer;
