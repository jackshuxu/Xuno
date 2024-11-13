// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import trackReducer from "./features/trackSlice"; // Import the trackReducer
import { shazamCoreApi } from "./services/shazamCore"; // Corrected the import path

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    tracks: trackReducer, // Add the trackReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
