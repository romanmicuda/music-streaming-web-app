export interface Artist {
  name: string;
  bio?: string;
  photoUrl?: string;
}

export interface Album {
  title: string;
  coverPhoto: string;
  releaseDate: Date;
}

export type Genre =
  | "Music"
  | "Podcasts"
  | "Live Events"
  | "Made For You"
  | "New Releases"
  | "Pop"
  | "Hip-Hop"
  | "Latin"
  | "Rock"
  | "Podcast Charts"
  | "Educational"
  | "Documentary"
  | "Comedy"
  | "Charts"
  | "Dance/Electronic"
  | "Mood"
  | "Indie"
  | "Workout"
  | "Discover"
  | "Country"
  | "R&B"
  | "K-pop"
  | "Chill"
  | "Sleep"
  | "Party"
  | "At Home"
  | "Decades"
  | "Dance Party"
  | "Love"
  | "Metal"
  | "Jazz"
  | "Anime"
  | "Trending"
  | "Classical"
  | "Folk & Acoustic"
  | "Focus"
  | "Soul"
  | "Kids & Family"
  | "Gaming"
  | "TV & Movies"
  | "Instrumental"
  | "Punk"
  | "Ambient"
  | "Netflix"
  | "Blues"
  | "Cooking & Dining"
  | "Alternative"
  | "Travel"
  | "Caribbean"
  | "Afro"
  | "Songwriters"
  | "GLOW"
  | "Funk & Disco"
  | "Nature & Noise"
  | "Spotify Singles"
  | "Summer"
  | "EQUAL"
  | "Fresh Finds"
  | "Christian & Gospel"
  | "RADAR"
  | "Wellness";

export interface Song {
  title: string;
  songPhoto: string;
  artist: Artist;
  album: Album;
  releaseDate: Date;
  duration: number;
  views: number;
  lyrics: string;
}

export type Gender =
  | "Non-binary"
  | "Prefer not to say"
  | "Male"
  | "Female"
  | "Other";

export interface User {
  email: string;
  gender: Gender;
  dateOfBirth: Date;
  Country: string;
}

export interface Playlist {
  id: number;
  title: string;
  owner: User | undefined;
  songs: Set<Song>;
  folder: Folder[];
}

export interface Folder {
  id: number;
  title: string;
}
