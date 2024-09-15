import React from "react";
import YourLibrarySearchBar from "./YourLibrarySearchBar";
import YourLibraryList from "./YourLibraryList";

function YourLibrary() {
  return (
    <div>
      <div>
        <span className="material-symbols-outlined">video_library</span>
        <p>Your Library</p>
        <span className="material-symbols-outlined">add</span>
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
