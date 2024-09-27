package com.example.demo.service;

import com.example.demo.repository.SongRepository;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import com.example.demo.model.Genre;
import com.example.demo.model.Song;
import com.example.demo.model.request.SongRequest;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;

@Service
public class SongService implements ISongService {
    @Autowired
    private SongRepository songRepository;
 
    public static String SONGS_UPLOAD_LOCATION = System.getProperty("user.dir") + "/src/main/resources/songs/";
    private static final Logger logger = LoggerFactory.getLogger(SongService.class);


    @Override
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    @Override
    public List<Song> getAllSongsByGenre(String genre) {
        return songRepository.findByGenre(Genre.valueOf(genre));
    }


    @Override
    public List<Song> getSongByTitle(String title) {
        return songRepository.findByTitleContainingIgnoreCase(title);
    }
    
    @Override
    public Song updateSong(Long id, SongRequest songRequest, Artist artist, Album album ) throws NotFoundException {
        if (!songRepository.existsById(id)) {
            throw new NotFoundException();
        }
        Song existingSong = songRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        existingSong.setTitle(songRequest.getTitle());
        existingSong.setSongPhoto(songRequest.getSongPhoto());
        existingSong.setArtist(artist);
        existingSong.setAlbum(album);
        existingSong.setReleaseDate(songRequest.getReleaseDate());
        existingSong.setDuration(songRequest.getDuration());
        existingSong.setViews(songRequest.getViews());
        existingSong.setLyrics(songRequest.getLyrics());
        return songRepository.save(existingSong);
    }
    @Override
    public Song saveSong(Song song) {
        return songRepository.save(song);
    }
    @Override
    public void deleteSong(Long id) {
        songRepository.deleteById(id);
    }

    @Override
    public Resource getSongById(long id) throws NotFoundException {
        Optional<Song> song = songRepository.findById(id);
        if (song.isPresent()) {
            String path = SONGS_UPLOAD_LOCATION + song.get().getSourceName();
            Resource songResource = new FileSystemResource(path);
            if (songResource.exists()) {
                return songResource;
            } else {
                logger.error("Song file not found at: " + path);
                throw new NotFoundException();
            }
        } else {
            logger.error("Song not found with ID: " + id);
            throw new NotFoundException();
        }
    }


    @Override
    public Song createSong(SongRequest songRequest, MultipartFile uploadedSong, Album album, Artist artist) {
        String sourceName = uploadedSong.getOriginalFilename();
        logger.info("Uploading song with filename: " + sourceName);
        File songFile = new File(SONGS_UPLOAD_LOCATION + sourceName);
        try {
            File directory = new File(SONGS_UPLOAD_LOCATION);
            if (!directory.exists()) {
                directory.mkdirs();
            }
            uploadedSong.transferTo(songFile);
            logger.info("Song saved to: " + songFile.getAbsolutePath());
        } catch (IOException e) {
            logger.error("Error saving uploaded song: " + e.getMessage());
        }
        Song song = new Song(songRequest, uploadedSong, album, artist, sourceName);
        return songRepository.save(song);
    }

}
