"use client";

import { fetchSongsByGenre } from "@/app/features/api";
import { Song } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { genre: string } }) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (songs.length > 0) {
      localStorage.setItem(`songs`, JSON.stringify(songs));
    }
  }, [songs, params.genre]);

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
          <li key={song.id}>
            <Link href={`/song/${song.id}`}>{song.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
