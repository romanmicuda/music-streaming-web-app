"use client";

import { fetchSongsByGenre } from "@/app/features/api";
import { Song } from "@/types";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { genre: string } }) {
  const [songs, setSongs] = useState<Song[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSongs = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchSongsByGenre(params.genre);
        setSongs(data);
      } catch (error) {
        setError("Failed to fetch songs.");
      } finally {
        setLoading(false);
      }
    };
    getSongs();
  }, [params.genre]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Genre: {decodeURIComponent(params.genre)}</h1>
      <ul>
        {songs?.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}
