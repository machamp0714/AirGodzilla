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
    default:
      return state;
  }
};

export default roomReducer;
