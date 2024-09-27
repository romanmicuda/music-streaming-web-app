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

export const fetchSongById = async (id: string) => {
  if (!Number(id)) {
    console.error(`Invalid id provided: ${id}`);
    return null;
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_MUSIC_URL}/songs/${id}`,
      {
        responseType: "blob",
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error occurred: ${error}`);
    return null;
  }
};

export const fetchArtistsBySearchTerm = async (searchTerm: string) => {
  if (!searchTerm) {
    console.error(`No search term`);
    return null;
  }

  try {
    const response = await axios.get(
      `${
        process.env.NEXT_PUBLIC_APP_MUSIC_URL
      }/artists/name/${decodeURIComponent(searchTerm)}`
    );

    return response.data;
  } catch (error) {
    console.error(`Error occured: ${error}`);
    return null;
  }
};
