import authReducer from "../reducers/authReducer";
import roomReducer from "../reducers/roomReducer";
import photoReducer from "../reducers/photoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
  photo: photoReducer
});

export default rootReducer;
