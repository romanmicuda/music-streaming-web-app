import React from "react";
import PlayingViewSong from "./PlayingViewSong";
import PlaybackControls from "./PlaybackControls";
import ExtraTrackControls from "./ExtraTrackControls";

function PlayingView() {
  return (
    <div>
      <PlayingViewSong />
      <PlaybackControls />
      <ExtraTrackControls />
    </div>
  );
}

export default PlayingView;
