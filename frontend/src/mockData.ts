import { Artist, Album, Song, User, Playlist, Folder } from "./types";
export const artists: Artist[] = [
  {
    id: 1,
    name: "Artist One",
    bio: "Bio for Artist One",
    photoUrl: "https://example.com/photo1.jpg",
    albums: [],
  },
  {
    id: 2,
    name: "Artist Two",
    bio: "Bio for Artist Two",
    photoUrl: "https://example.com/photo2.jpg",
    albums: [],
  },
  {
    id: 3,
    name: "Artist Three",
    bio: "Bio for Artist Three",
    photoUrl: "https://example.com/photo3.jpg",
    albums: [],
  },
];
export const albums: Album[] = [
  {
    id: 1,
    title: "Album One",
    coverPhoto: "https://example.com/cover1.jpg",
    releaseDate: new Date("2024-01-01"),
  },
  {
    id: 2,
    title: "Album Two",
    coverPhoto: "https://example.com/cover2.jpg",
    releaseDate: new Date("2024-02-01"),
  },
  {
    id: 3,
    title: "Album Three",
    coverPhoto: "https://example.com/cover3.jpg",
    releaseDate: new Date("2024-03-01"),
  },
];

const users: User[] = [
  {
    id: 1,
    email: "alex.smith@example.com",
    gender: "Male",
    dateOfBirth: new Date("1990-05-21"),
    Country: "United States",
  },
  {
    id: 2,
    email: "julia.lee@example.com",
    gender: "Female",
    dateOfBirth: new Date("1995-09-14"),
    Country: "Canada",
  },
];

export const songs: Song[] = [
  {
    id: 1,
    title: "Song One",
    songPhoto: "https://example.com/song1.jpg",
    artist: artists[0],
    album: albums[0],
    releaseDate: new Date("2024-01-01"),
    duration: 210,
    views: 1000,
    lyrics: "Lyrics for Song One",
    songBase64: "data:audio/mp3;base64,<base64data1>",
  },
  {
    id: 2,
    title: "Song Two",
    songPhoto: "https://example.com/song2.jpg",
    artist: artists[1],
    album: albums[1],
    releaseDate: new Date("2024-02-01"),
    duration: 180,
    views: 2000,
    lyrics: "Lyrics for Song Two",
    songBase64: "data:audio/mp3;base64,<base64data2>",
  },
  {
    id: 3,
    title: "Song Three",
    songPhoto: "https://example.com/song3.jpg",
    artist: artists[2],
    album: albums[2],
    releaseDate: new Date("2024-03-01"),
    duration: 240,
    views: 3000,
    lyrics: "Lyrics for Song Three",
    songBase64: "data:audio/mp3;base64,<base64data3>",
  },
  {
    id: 4,
    title: "Song Four",
    songPhoto: "https://example.com/song4.jpg",
    artist: artists[3],
    album: albums[3],
    releaseDate: new Date("2024-04-01"),
    duration: 210,
    views: 1500,
    lyrics: "Lyrics for Song Four",
    songBase64: "data:audio/mp3;base64,<base64data4>",
  },
  {
    id: 5,
    title: "Song Five",
    songPhoto: "https://example.com/song5.jpg",
    artist: artists[4],
    album: albums[4],
    releaseDate: new Date("2024-05-01"),
    duration: 190,
    views: 2500,
    lyrics: "Lyrics for Song Five",
    songBase64: "data:audio/mp3;base64,<base64data5>",
  },
  {
    id: 6,
    title: "Song Six",
    songPhoto: "https://example.com/song6.jpg",
    artist: artists[5],
    album: albums[5],
    releaseDate: new Date("2024-06-01"),
    duration: 230,
    views: 3500,
    lyrics: "Lyrics for Song Six",
    songBase64: "data:audio/mp3;base64,<base64data6>",
  },
  {
    id: 7,
    title: "Song Seven",
    songPhoto: "https://example.com/song7.jpg",
    artist: artists[6],
    album: albums[6],
    releaseDate: new Date("2024-07-01"),
    duration: 200,
    views: 4500,
    lyrics: "Lyrics for Song Seven",
    songBase64: "data:audio/mp3;base64,<base64data7>",
  },
  {
    id: 8,
    title: "Song Eight",
    songPhoto: "https://example.com/song8.jpg",
    artist: artists[7],
    album: albums[7],
    releaseDate: new Date("2024-08-01"),
    duration: 220,
    views: 5500,
    lyrics: "Lyrics for Song Eight",
    songBase64: "data:audio/mp3;base64,<base64data8>",
  },
  {
    id: 9,
    title: "Song Nine",
    songPhoto: "https://example.com/song9.jpg",
    artist: artists[8],
    album: albums[8],
    releaseDate: new Date("2024-09-01"),
    duration: 250,
    views: 6500,
    lyrics: "Lyrics for Song Nine",
    songBase64: "data:audio/mp3;base64,<base64data9>",
  },
  {
    id: 10,
    title: "Song Ten",
    songPhoto: "https://example.com/song10.jpg",
    artist: artists[9],
    album: albums[9],
    releaseDate: new Date("2024-10-01"),
    duration: 210,
    views: 7500,
    lyrics: "Lyrics for Song Ten",
    songBase64: "data:audio/mp3;base64,<base64data10>",
  },
];

export const playlists: Playlist[] = [
  {
    id: 1,
    title: "Playlist One",
    owner: users[0],
    songs: [songs[0], songs[1]],
    folder: [{ id: 1, title: "Folder One" }],
  },
  {
    id: 2,
    title: "Playlist Two",
    owner: users[1],
    songs: [songs[2], songs[3]],
    folder: [{ id: 2, title: "Folder Two" }],
  },
];

export const folders: Folder[] = [
  { id: 1, title: "Folder One" },
  { id: 2, title: "Folder Two" },
  { id: 3, title: "Folder Three" },
];

export const genres: string[] = [
  "Music",
  "Mood",
  "Indie",
  "Workout",
];

export const genreMapping: { [key: string]: string } = {
  Music: "MUSIC",
  "Made For You": "MADE_FOR_YOU",
  "New Releases": "NEW_RELEASES",
  Pop: "POP",
  "Hip-Hop": "HIP_HOP",
  Latin: "LATIN",
  Rock: "ROCK",
  "Podcast Charts": "PODCAST_CHARTS",
  Educational: "EDUCATIONAL",
  Documentary: "DOCUMENTARY",
  Comedy: "COMEDY",
  Charts: "CHARTS",
  "Dance/Electronic": "DANCE_ELECTRONIC",
  Mood: "MOOD",
  Indie: "INDIE",
  Workout: "WORKOUT",
  Discover: "DISCOVER",
  Country: "COUNTRY",
  "R&B": "R_AND_B",
};

export const mapGenreToEnum = (genre: string): string => {
  return genreMapping[genre] || genre;
};
