package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Album;
import com.example.demo.repository.AlbumRepository;

import java.util.List;

@RestController
@RequestMapping("/albums")
public class AlbumController {

    @Autowired
    private AlbumRepository albumRepository;

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Album> getAlbumById(@PathVariable Long id) {
        return albumRepository.findById(id)
                .map(album -> ResponseEntity.ok().body(album))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Album createAlbum(@RequestBody Album album) {
        return albumRepository.save(album);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Album> updateAlbum(@PathVariable Long id, @RequestBody Album album) {
        if (!albumRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        
        Album existingAlbum = albumRepository.findById(id).orElseThrow(() -> new RuntimeException("Album not found"));
        existingAlbum.setTitle(album.getTitle());
        existingAlbum.setCoverPhoto(album.getCoverPhoto());
        existingAlbum.setReleaseDate(album.getReleaseDate() != null ? album.getReleaseDate() : existingAlbum.getReleaseDate());

        return ResponseEntity.ok().body(albumRepository.save(existingAlbum));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAlbum(@PathVariable Long id) {
        if (!albumRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        albumRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
