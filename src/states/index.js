import { legacy_createStore as createStore } from "redux";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./users";
import repositoryReducer from "./repositories";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

const rootReducer = {
  userReducer,
  repositoryReducer,
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
