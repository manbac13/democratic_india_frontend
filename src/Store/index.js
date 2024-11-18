import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import menu from "./menu/index";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  menu: menu,
});

const persistConfig = {
  key: "root", // Key to store the persisted data in localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
