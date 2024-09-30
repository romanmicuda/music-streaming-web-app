"use client";

import { useEffect, useState } from "react";
import { Song as SongType } from "@/types";
import { fetchSongById } from "@/app/features/api";
import { SongHeader } from "./SongHeader";
import SongArtist from "./SongArtist";
import { SongControl } from "./SongControl";

export default function SongDetail({ params }: { params: { id: string } }) {
  const [song, setSong] = useState<SongType | null>(null);

  useEffect(() => {
    const savedSongs = localStorage.getItem("songs");
    if (savedSongs) {
      const parsedSongs: SongType[] = JSON.parse(savedSongs);
      const foundSong = parsedSongs.find((s) => s.id === Number(params.id));
      if (foundSong) {
        setSong(foundSong);
      }
    }
  }, [params.id]);

  return (
    <div>
      {song && <SongHeader song={song} />}
      <SongControl song={song} />
      {song?.artist && <SongArtist artist={song?.artist} />}
    </div>
  );
}
