package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Song;
import com.example.demo.repository.SongRepository;

import java.util.List;

@RestController
@RequestMapping("/songs")
public class SongController {

    @Autowired
    private SongRepository songRepository;

    @GetMapping
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getSongById(@PathVariable Long id) {
        return songRepository.findById(id)
                .map(song -> ResponseEntity.ok().body(song))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Song createSong(@RequestBody Song song) {
        return songRepository.save(song);
    }

    @PutMapping("/{id}")
    public Song updateSong(@PathVariable Long id, @RequestBody Song song) {
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSong(@PathVariable Long id) {
        if (!songRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        songRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
