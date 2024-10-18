export interface Artist {
  id: number;
  name: string;
  bio?: string;
  photoUrl?: string;
  albums: Album[];
}

export interface Album {
  id: number;
  title: string;
  coverPhoto: string;
  releaseDate: Date;
}

export type Genre =
  | "Music"
  | "Mood"
  | "Workout"
  | "Indie";

export interface Song {
  id: number;
  title: string;
  songPhoto: string;
  artist: Artist;
  album: Album;
  releaseDate: Date;
  duration: number;
  views: number;
  lyrics: string;
  songBase64: string;
}

export type Gender =
  | "Non-binary"
  | "Prefer not to say"
  | "Male"
  | "Female"
  | "Other";

export interface User {
  id: number;
  email: string;
  gender: Gender;
  dateOfBirth: Date;
  Country: string;
}

export interface Playlist {
  id: number;
  title: string;
  owner: User | undefined;
  songs: Song[];
  folder: Folder[];
}

export interface Folder {
  id: number;
  title: string;
}
