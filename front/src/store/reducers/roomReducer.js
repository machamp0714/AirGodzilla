import * as actionTypes from "../../utils/actionTypes";

const initState = {
  rooms: [],
  room: {},
  isLoading: false
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
    case actionTypes.EDIT_ROOM_REQUEST:
      return {
        ...state,
        room: {},
        isLoading: true
      };
    case actionTypes.EDIT_ROOM_FAILURE:
      return {
        ...state,
        room: {},
        isLoading: false
      };
    case actionTypes.EDIT_ROOM_SUCCESS:
      return {
        ...state,
        room: action.room,
        isLoading: false
      };
    case actionTypes.UPDATE_ROOM_FAILURE:
      console.log(action.error);
      return state;
    case actionTypes.UPDATE_ROOM_SUCCESS:
      console.log("success update", action.room);
      return {
        ...state,
        room: action.room
      };
    default:
      return state;
  }
};

export default roomReducer;
