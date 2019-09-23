import authReducer from "./authReducer";
import roomReducer from "./roomReducer";
import photoReducer from "./photoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
  photo: photoReducer
});

export default rootReducer;
