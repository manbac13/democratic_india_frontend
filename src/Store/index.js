import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import menu from "./menu/index";
import generalElection2024 from "./general-election-2024/index";
import dashboard from "./dashboard/index";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  menu: menu,
  generalElection2024: generalElection2024,
  dashboard: dashboard,
});

const persistConfig = {
  key: "root", // Key to store the persisted data in localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["register", "rehydrate"], // Paths containing non-serializable values
      },
    }),
});

export const persistor = persistStore(store);
export default store;
