import { Song } from "@/types";
import React from "react";

interface SongHeaderProps {
  song: Song;
}

export const SongHeader: React.FC<SongHeaderProps> = ({ song }) => {
  const releaseYear = new Date(song.releaseDate).getFullYear();
  return (
    <div>
      <div>
        <img src={song.songPhoto} alt={song.title} />
      </div>
      <div>
        <p>Song</p>
        <h2>{song.title}</h2>
        <div>
          <p>{song.artist.name}</p>
          <p>{song.album.title}</p>
          <p>{releaseYear}</p>
          <p>{song.views}</p>
        </div>
      </div>
    </div>
  );
};
