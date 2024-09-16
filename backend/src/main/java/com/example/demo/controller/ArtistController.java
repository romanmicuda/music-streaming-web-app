package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Artist;
import com.example.demo.repository.ArtistRepository;

import java.util.List;

@RestController
@RequestMapping("/artists")
public class ArtistController {

    @Autowired
    private ArtistRepository artistRepository;

    @GetMapping
    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Artist> getArtistById(@PathVariable Long id) {
        return artistRepository.findById(id)
                .map(artist -> ResponseEntity.ok().body(artist))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Artist createArtist(@RequestBody Artist artist) {
        return artistRepository.save(artist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Artist> updateArtist(@PathVariable Long id, @RequestBody Artist artist) {
        if (!artistRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        
        Artist existingArtist = artistRepository.findById(id).orElseThrow(() -> new RuntimeException("Artist not found"));
        existingArtist.setName(artist.getName());
        existingArtist.setBio(artist.getBio());
        existingArtist.setPhotoUrl(artist.getPhotoUrl());
        existingArtist.setAlbums(artist.getAlbums()); // Assuming you handle the relationship correctly

        return ResponseEntity.ok().body(artistRepository.save(existingArtist));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArtist(@PathVariable Long id) {
        if (!artistRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        artistRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
