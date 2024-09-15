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
