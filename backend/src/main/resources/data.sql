
INSERT INTO artist (id, bio, name, photo_url) VALUES
(1, 'An experimental artist blending digital soundscapes and abstract visuals.', 'Nova Elektra', 'artist1.png'),
(2, 'A prolific singer-songwriter known for their poetic lyrics and ethereal voice.', 'Icarus Waves', 'artist1.png'),
(3, 'An indie musician crafting raw acoustic tracks with a touch of nostalgia.', 'Luna Haven', 'artist1.png');

INSERT INTO album (artist_id, id, release_date, cover_photo, title)
VALUES
(1, 1, '2017-09-22', 'album1.png', 'Multi-tiered grid-enabled circuit'),
(2, 2, '2016-10-20', 'album1.png', 'Balanced static data-warehouse'),
(3, 3, '2016-08-06', 'album1.png', 'Synchronized radical collaboration');

INSERT INTO song (duration, genre, views, album_id, artist_id, id, release_date, lyrics, source_name, song_photo, title)
VALUES
(180, 'MOOD', 2281, 1, 1, 1, '2024-09-25', 'Lyrics for StockTune Boiling Timberwood Party Anthem', 'StockTune-Boiling_Timberwood_Party_Anthem_1726825195.mp3', 'song1.png', 'StockTune Boiling Timberwood Party Anthem'),
(180, 'WORKOUT', 2080, 2, 2, 2, '2024-09-25', 'Lyrics for StockTune Bright Horizons Ahead', 'StockTune-Bright_Horizons_Ahead_1726825214.mp3', 'song1.png', 'StockTune Bright Horizons Ahead'),
(180, 'INDIE', 6881, 3, 3, 3, '2024-09-25', 'Lyrics for StockTune City Lights Pulse', 'StockTune-City_Lights_Pulse_1726824989.mp3', 'song1.png', 'StockTune City Lights Pulse');
