import { mapGenreToEnum } from "@/mockData";
import axios from "axios";

export const fetchSongsByGenre = async (genre: string) => {
  const decodedGenre = decodeURIComponent(genre);
  const genreEnum = mapGenreToEnum(decodedGenre);

  if (!genreEnum) {
    console.error(`Invalid genre provided: ${genre}`);
    return [];
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_MUSIC_URL}/songs/genre/${genreEnum}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error occurred: ${error}`);
    return [];
  }
};
