import * as actionTypes from "../../utils/actionTypes";

const initState = {
  rooms: [],
  room: {}
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROOMS_FAILURE:
      return state;
    case actionTypes.GET_ROOMS_SUCCESS:
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
    case actionTypes.EDIT_ROOM_FAILURE:
      return {
        ...state,
        room: {}
      };
    case actionTypes.EDIT_ROOM_SUCCESS:
      return {
        ...state,
        room: action.room
      };
    default:
      return state;
  }
};

export default roomReducer;
