import {
  ADD_ROOM_VALUES,
  CREATE_ROOM,
  CREATE_ROOM_ERROR
} from "../constants/roomTypes";

const initState = {
  values: {},
  isCreated: false
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ROOM_VALUES:
      return {
        values: { ...state.values, ...action.values },
        isCreated: false
      };
    case CREATE_ROOM:
      return {
        values: {},
        isCreated: true
      };
    case CREATE_ROOM_ERROR:
      return state;
    default:
      return state;
  }
};

export default roomReducer;
