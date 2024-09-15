import { Folder, Playlist } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlaylistState {
  playlists: Playlist[];
  folders: Folder[];
}

const initialState: PlaylistState = {
  playlists: [],
  folders: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addPlaylist(state, action: PayloadAction) {
      state.playlists.push({
        id: Date.now(),
        title: `New Playlist #${state.playlists.length}`,
        owner: undefined,
        songs: new Set(),
        folder: [],
      });
    },
    addFolder(state, action: PayloadAction) {
      state.folders.push({
        id: Date.now(),
        title: "New Folder",
      });
    },
  },
});

export const { addPlaylist, addFolder } = playlistSlice.actions;
export default playlistSlice.reducer;
