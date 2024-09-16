"use client";

import React from "react";

function PlaybackControls() {
  const handlePlay = () => {
    // Implement play functionality
  };

  const handlePause = () => {
    // Implement pause functionality
  };

  const handleNext = () => {
    // Implement next track functionality
  };

  const handlePrevious = () => {
    // Implement previous track functionality
  };

  return (
    <div className="flex items-center">
      <span className="material-symbols-outlined">shuffle</span>

      <button onClick={handlePrevious} className="control-button">
        <span className="material-symbols-outlined">skip_previous</span>
      </button>
      <button onClick={handlePlay} className="control-button">
        <span className="material-symbols-outlined">play_arrow</span>
      </button>
      <button onClick={handlePause} className="control-button">
        <span className="material-symbols-outlined">pause</span>
      </button>
      <button onClick={handleNext} className="control-button">
        <span className="material-symbols-outlined">skip_next</span>
      </button>
      <span className="material-symbols-outlined">replay</span>
    </div>
  );
}

export default PlaybackControls;
