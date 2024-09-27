"use client";

import { fetchAlbumsBySearchTerm } from "@/app/features/api";
import { Album } from "@/types";
import React, { useEffect, useState } from "react";

function Albums({ params }: { params: { searchTerm: string } }) {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArtists = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchAlbumsBySearchTerm(params.searchTerm);
        setAlbums(data);
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
      <h1>Albums</h1>

      {albums && albums.length > 0 ? (
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <p>Title: {album.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No Albums found for the term {decodeURIComponent(params.searchTerm)}.
        </p>
      )}
    </div>
  );
}

export default Albums;
