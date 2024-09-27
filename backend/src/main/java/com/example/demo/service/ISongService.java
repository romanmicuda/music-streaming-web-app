package com.example.demo.service;

import java.util.List;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import com.example.demo.model.Song;
import com.example.demo.model.request.SongRequest;

public interface ISongService {
    
      public List<Song> getAllSongs();

      public Resource getSongById(long id) throws NotFoundException;

      public Song createSong(SongRequest songRequest, MultipartFile uploadedSong, Album album, Artist artist);

      public Song updateSong(Long id, SongRequest song, Artist artist, Album album) throws NotFoundException;

      public Song saveSong(Song song);

      public void deleteSong(Long id);

      public List<Song> getAllSongsByGenre(String genre);
      public List<Song> getSongByTitle(String title);

      
}
