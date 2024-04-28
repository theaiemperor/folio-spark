import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./Redux/darkMode";

export const store = configureStore({
  reducer: {
    darkMode: darkMode,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;