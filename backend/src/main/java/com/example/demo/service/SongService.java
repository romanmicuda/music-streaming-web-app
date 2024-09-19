package com.example.demo.service;

import com.example.demo.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Song;

import java.util.List;
import java.util.Optional;

@Service
public class SongService implements ISongService {
    @Autowired
    private SongRepository songRepository;

    @Override
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }
    @Override
    public Optional<Song> getSongById(Long id) {
        return songRepository.findById(id);
    }
    @Override
    public Song createSong(Song song) {
        return songRepository.save(song);
    }
    @Override
    public Song updateSong(Long id, Song song) {
        if (!songRepository.existsById(id)) {
            throw new RuntimeException("Song not found");
        }
        Song existingSong = songRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        existingSong.setTitle(song.getTitle());
        existingSong.setSongPhoto(song.getSongPhoto());
        existingSong.setArtist(song.getArtist());
        existingSong.setAlbum(song.getAlbum());
        existingSong.setReleaseDate(song.getReleaseDate());
        existingSong.setDuration(song.getDuration());
        existingSong.setViews(song.getViews());
        existingSong.setLyrics(song.getLyrics());
        existingSong.setSongBase64(song.getSongBase64());
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
}