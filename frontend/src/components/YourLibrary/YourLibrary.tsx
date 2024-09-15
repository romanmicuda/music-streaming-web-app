"use client";

import React, { useState } from "react";
import YourLibrarySearchBar from "./YourLibrarySearchBar";
import YourLibraryList from "./YourLibraryList";

function YourLibrary() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showMorePopup, setShowPopUp] = useState(false);

  const handleAddPopup = () => setShowAddPopup((prev) => !prev);

  const handleMorePopup = () => setShowPopUp((prev) => !prev);

  const handleCreatePlaylist = () => {};

  const handleCreatePlaylistFolder = () => {};
  return (
    <div>
      <div>
        <span className="material-symbols-outlined">video_library</span>
        <p>Your Library</p>
        <span className="material-symbols-outlined" onClick={handleAddPopup}>
          add
        </span>
        {showAddPopup && (
          <div>
            <div onClick={handleCreatePlaylist}>
              <span className="material-symbols-outlined">add_box</span>
              <p>Create New Playlist</p>
            </div>
            <div onClick={handleCreatePlaylistFolder}>
              <span className="material-symbols-outlined">library_add</span>
              <p>Create Playlist Folder</p>
            </div>
          </div>
        )}
        <span className="material-symbols-outlined" onClick={handleMorePopup}>
          more_horiz
        </span>
        {showMorePopup && (
          <div>
            <p>Rename</p>
            <p>Delete</p>
            <p>Create Playlist</p>
            <p>Create Folder</p>
            <p>Move Folder</p>
          </div>
        )}
        <span className="material-symbols-outlined">arrow_forward</span>
      </div>
      <div>
        <span className="material-symbols-outlined">close</span>
        <p>Playlist</p>
        <p>By you</p>
      </div>
      <div>
        <YourLibrarySearchBar />
        <p>Recent</p>
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div>
        <YourLibraryList />
      </div>
    </div>
  );
}

export default YourLibrary;
