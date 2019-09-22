import {
  CREATE_ROOM_FAILURE,
  CREATE_ROOM_SUCCESS,
  UPDATE_ROOM_FAILURE,
  UPDATE_ROOM_SUCCESS,
  GET_ROOMS_FAILURE,
  GET_ROOMS_SUCCESS,
  GET_ROOM_REQUEST,
  GET_ROOM_FAILURE,
  GET_ROOM_SUCCESS
} from "../../utils/actionTypes";

const initState = {
  rooms: [],
  room: {},
  isLoading: false
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROOMS_FAILURE:
      return state;
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.rooms
      };
    case CREATE_ROOM_FAILURE:
      return state;
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        room: action.room
      };
    case UPDATE_ROOM_FAILURE:
      console.log(action.error);
      return state;
    case UPDATE_ROOM_SUCCESS:
      console.log("success update", action.room);
      return {
        ...state,
        room: action.room
      };
    case GET_ROOM_REQUEST:
      return {
        ...state,
        isLoading: true,
        room: {}
      };
    case GET_ROOM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case GET_ROOM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        room: action.room
      };
    default:
      return state;
  }
};

export default roomReducer;
