import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice";
import playControlReducer from "./playControlSlice";

const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    playControl: playControlReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
