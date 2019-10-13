import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createFilter } from "redux-persist-transform-filter";
import rootReducer from "./reducers/rootReducer";

const persistingRoomReducer = createFilter("room", ["values"]);
const persistingPhotoReducer = createFilter("photo");

const persistConfig = {
  key: "values",
  storage,
  transforms: [persistingRoomReducer, persistingPhotoReducer]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;
