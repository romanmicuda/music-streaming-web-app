import React, { useState, useRef } from "react";

interface SongControlProps {
  audio: string | null;
}

export const SongControl: React.FC<SongControlProps> = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div>
        <audio ref={audioRef}>
          {audio && <source src={audio} type="audio/mpeg" />}
          Your browser does not support the audio element.
        </audio>
      </div>

      <span
        className="material-symbols-outlined"
        onClick={handlePlayPause}
        style={{ cursor: "pointer" }}
      >
        {isPlaying ? "pause" : "play_arrow"}
      </span>

      <span className="material-symbols-outlined">add_circle</span>
      <span className="material-symbols-outlined">more_horiz</span>
    </div>
  );
};
