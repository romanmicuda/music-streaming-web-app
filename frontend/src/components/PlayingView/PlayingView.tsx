import React from "react";
import PlayingViewSong from "./PlayingViewSong";
import PlaybackControls from "./PlaybackControls";
import ExtraTrackControls from "./ExtraTrackControls";

function PlayingView() {
  return (
    <div className="flex justify-between m-5">
      <PlayingViewSong />
      <PlaybackControls />
      <ExtraTrackControls />
    </div>
  );
}

export default PlayingView;
