"use client";

import { useEffect, useState } from "react";
import { Song as SongType } from "@/types";
import { fetchSongById } from "@/app/features/api";

export default function SongDetail({ params }: { params: { id: string } }) {
  const [song, setSong] = useState<SongType | null>(null);
  const [audio, setAudio] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const getSongAudio = async () => {
      setLoading(true);
      setError(null);
      try {
        const audioBlob = await fetchSongById(params.id);

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
    };

    getSongAudio();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {song && (
        <div>
          <h1>{song.title}</h1>
          <p>Artist: {song.artist.name}</p>
          <p>Album: {song.album.title}</p>
          {audio && (
            <div>
              <audio controls>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
