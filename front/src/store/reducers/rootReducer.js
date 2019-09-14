import authReducer from "./authReducer";
import roomReducer from "./roomReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer
});

export default rootReducer;
