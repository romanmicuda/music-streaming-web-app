package com.example.demo.controller;

import com.example.demo.model.Album;
import com.example.demo.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/albums")
public class AlbumController {

    private final AlbumService albumService;

    @Autowired
    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Album> getAlbumById(@PathVariable Long id) {
        return albumService.getAlbumById(id)
                .map(album -> ResponseEntity.ok().body(album))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Album createAlbum(@RequestBody Album album) {
        return albumService.saveAlbum(album);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Album> updateAlbum(@PathVariable Long id, @RequestBody Album album) {
        Optional<Album> existingAlbumOpt = albumService.getAlbumById(id);
        if (!existingAlbumOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        Album existingAlbum = existingAlbumOpt.get();
        existingAlbum.setTitle(album.getTitle());
        existingAlbum.setCoverPhoto(album.getCoverPhoto());
        existingAlbum.setReleaseDate(album.getReleaseDate() != null ? album.getReleaseDate() : existingAlbum.getReleaseDate());

        return ResponseEntity.ok().body(albumService.saveAlbum(existingAlbum));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAlbum(@PathVariable Long id) {
        Optional<Album> existingAlbumOpt = albumService.getAlbumById(id);
        if (!existingAlbumOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        albumService.deleteAlbum(id);
        return ResponseEntity.noContent().build();
    }
}
