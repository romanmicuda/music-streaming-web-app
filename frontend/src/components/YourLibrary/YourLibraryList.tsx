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
        {playlists &&
          playlists.map((playlist, index) => (
            <div key={index}>{playlist.title}</div>
          ))}
      </div>
      <div>
        {folders &&
          folders.map((folder, index) => <div key={index}>{folder.title}</div>)}
      </div>
    </div>
  );
}

export default YourLibraryList;
