import { Artist } from "@/types";
import React from "react";

interface SongArtistProps {
  artist: Artist;
}

export const SongArtist: React.FC<SongArtistProps> = ({ artist }) => {
  return (
    <div>
      <img src={artist.photoUrl} alt="Artist profile photo" />
      <div>
        <p>Artist</p>
        <p>{artist.name}</p>
      </div>
    </div>
  );
};

export default SongArtist;
