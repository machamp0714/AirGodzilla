import { CREATE_SUCCESS, CREATE_ERROR } from "../constants/roomTypes";

const roomReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_SUCCESS:
      console.log("create success");
      return action.room;
    case CREATE_ERROR:
      console.log("create error");
      return action.error;
    default:
      return state;
  }
};

export default roomReducer;
