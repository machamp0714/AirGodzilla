import authReducer from "../reducers/authReducer";
import roomReducer from "../reducers/roomReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer
});

export default rootReducer;
