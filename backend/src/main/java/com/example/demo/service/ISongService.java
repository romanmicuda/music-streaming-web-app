package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Song;

public interface ISongService {
    
     public List<Song> getAllSongs();

      public Optional<Song> getSongById(Long id);

      public Song createSong(Song song);

      public Song updateSong(Long id, Song song);

      public Song saveSong(Song song);

      public void deleteSong(Long id);
}
