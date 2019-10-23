import {
  ADD_ROOM_VALUES,
  CREATE_ROOM,
  CREATE_ROOM_ERROR,
  CREATE_ROOM_LOADING
} from "../constants/roomTypes";

const initState = {
  values: {},
  isCreated: false,
  loading: false
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ROOM_VALUES:
      return {
        values: {...state.values, ...action.values},
        isCreated: false
      };
    case CREATE_ROOM_LOADING:
      return {
        valuse: {},
        isCreated: false,
        loading: true
      };
    case CREATE_ROOM:
      return {
        values: {},
        isCreated: true,
        loading: false
      };
    case CREATE_ROOM_ERROR:
      return state;
    default:
      return state;
  }
};

export default roomReducer;
