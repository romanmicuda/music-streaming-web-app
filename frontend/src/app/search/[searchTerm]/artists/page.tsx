"use client";

import React, { useEffect, useState } from "react";
import { Artist } from "@/types";
import { fetchArtistsBySearchTerm } from "@/app/features/api";

function Artists({ params }: { params: { searchTerm: string } }) {
  const [artists, setArtists] = useState<Artist[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArtists = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchArtistsBySearchTerm(params.searchTerm);
        setArtists(data);
      } catch (error) {
        setError("Failed to fetch artists.");
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
      <h1>Artists</h1>

      {artists && artists.length > 0 ? (
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              <p>Name: {artist.name}</p>
              <p>Bio: {artist.bio}</p>
              <p>
                Albums:{" "}
                {artist.albums.map((album) => (
                  <p key={album.id}>{album.title}</p>
                ))}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No artists found for the term {decodeURIComponent(params.searchTerm)}.
        </p>
      )}
    </div>
  );
}

export default Artists;
