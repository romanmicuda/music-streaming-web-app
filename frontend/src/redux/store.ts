import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice";

const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
