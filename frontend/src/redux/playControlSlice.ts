import { Playlist, Song } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayControlState {
  queue: (Song | Playlist)[];
  playingItem: Song | Playlist | null;
}

const initialState: PlayControlState = {
  queue: [],
  playingItem: null,
};

const playControlSlice = createSlice({
  name: "playControl",
  initialState,
  reducers: {
    addToQueue(state, action: PayloadAction<Song | Playlist>) {
      const lastItem = state.queue.at(-1);
      if (!(lastItem && lastItem.id === action.payload.id)) {
        state.queue.push(action.payload);
        state.playingItem = action.payload;
      }
    },
    popQueue(state) {
      state.queue.pop();
      state.playingItem = state.queue.at(-1) || null;
    },
    removeItemQueue(state, action: PayloadAction<number>) {
      state.queue = state.queue.filter((_, index) => index !== action.payload);
      if (state.queue.length === 0) {
        state.playingItem = null;
      } else if (state.queue.length <= action.payload) {
        state.playingItem = state.queue.at(-1) || null;
      }
    },
    setPlayingItem(state, action: PayloadAction<Song | Playlist | null>) {
      state.playingItem = action.payload;
    },
  },
});

export const { addToQueue, popQueue, setPlayingItem, removeItemQueue } =
  playControlSlice.actions;
export default playControlSlice.reducer;
