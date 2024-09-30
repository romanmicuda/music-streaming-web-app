import { addToQueue, setPlayingItem } from "@/redux/playControlSlice";
import { RootState } from "@/redux/store";
import { Song } from "@/types";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

interface SongControlProps {
  song: Song | null;
}

export const SongControl: React.FC<SongControlProps> = ({ song }) => {
  const playingItem = useSelector(
    (state: RootState) => state.playControl.playingItem
  );
  const dispatch = useDispatch();

  const handleAddToQueue = () => {
    if (song) {
      dispatch(addToQueue(song));
    }
  };

  return (
    <div>
      <span
        className="material-symbols-outlined"
        onClick={handleAddToQueue}
        style={{ cursor: "pointer" }}
      >
        {playingItem === song ? "pause" : "play_arrow"}
      </span>
      <span className="material-symbols-outlined">add_circle</span>
      <span className="material-symbols-outlined">more_horiz</span>
    </div>
  );
};
