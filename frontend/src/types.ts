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

export interface User {}

export interface Playlist {
  title: string;
  owner: User;
  songs: Set<Song>;
  folder: Folder[];
}

export interface Folder {
  title: string;
}
