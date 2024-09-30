"use client";

import React, { useRef, useState } from "react";

interface PlaybackControlsProps {
  audio: string | null;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  audio,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    audioRef.current && audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current && audioRef.current.pause();
  };

  const handleNext = () => {};

  const handlePrevious = () => {};

  return (
    <div className="flex items-center space-x-2">
      <div>
        <audio ref={audioRef}>
          {audio && <source src={audio} type="audio/mpeg" />}
        </audio>
      </div>
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
};

export default PlaybackControls;
