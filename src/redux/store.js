// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index"; // Corrected path to point to reducer/index.js

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
