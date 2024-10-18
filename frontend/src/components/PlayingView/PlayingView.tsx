"use client";

import React, { useEffect, useState } from "react";
import PlayingViewSong from "./PlayingViewSong";
import PlaybackControls from "./PlaybackControls";
import ExtraTrackControls from "./ExtraTrackControls";
import { fetchSongById } from "@/app/features/api";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

function PlayingView() {
  const [audio, setAudio] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const playingItem = useSelector(
    (state: RootState) => state.playControl.playingItem
  );

  useEffect(() => {
    console.log(playingItem)
    const getSongAudio = async () => {
      setLoading(true);
      setError(null);
      if (playingItem) {
        try {
          const audioBlob = await fetchSongById(playingItem?.id);
          if (!audioBlob) {
            throw new Error("Failed to fetch song data.");
          }
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudio(audioUrl);
        } catch (error) {
          setError("Failed to fetch song audio.");
        } finally {
          setLoading(false);
        }
      }
    };
    getSongAudio();
  }, [playingItem]);

  return (
    <div className="flex justify-between m-5">
      <PlayingViewSong />
      <PlaybackControls audio={audio} />
      <ExtraTrackControls />
    </div>
  );
}

export default PlayingView;
