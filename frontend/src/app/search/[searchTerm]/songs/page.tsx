"use client";

import { fetchSongsBySearchTerm } from "@/app/features/api";
import { Song } from "@/types";
import React, { useEffect, useState } from "react";

function Songs({ params }: { params: { searchTerm: string } }) {
  const [songs, setSongs] = useState<Song[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArtists = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchSongsBySearchTerm(params.searchTerm);
        setSongs(data);
      } catch (error) {
        setError("Failed to fetch songs.");
      } finally {
        setLoading(false);
      }
    };

    getArtists();
  }, [params.searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Songs</h1>

      {songs && songs.length > 0 ? (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <p>Title: {song.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No songs found for the term {decodeURIComponent(params.searchTerm)}.
        </p>
      )}
    </div>
  );
}

export default Songs;
