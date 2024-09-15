import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function YourLibraryList() {
  const playlists = useSelector((state: RootState) => state.playlist.playlists);
  const folders = useSelector((state: RootState) => state.playlist.folders);
  return (
    <div>
      <div>
        <p>Title</p>
        <p>Date Added</p>
        <p>Played</p>
      </div>
      <div>
        {playlists && playlists.map((playlist) => <div>{playlist.title}</div>)}
      </div>
      <div>{folders && folders.map((folder) => <div>{folder.title}</div>)}</div>
    </div>
  );
}

export default YourLibraryList;
