package com.example.demo.controller;

import com.example.demo.exception.IllegalOperationException;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import com.example.demo.model.Song;
import com.example.demo.model.request.AlbumRequest;
import com.example.demo.model.response.AlbumResponse;
import com.example.demo.service.AlbumService;
import com.example.demo.service.ArtistService;
import com.example.demo.service.IAlbumService;
import com.example.demo.service.IArtistService;
import com.example.demo.service.ISongService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/albums")
public class AlbumController {

    @Autowired
    private IAlbumService albumService;

    @Autowired
    private IArtistService artistService;

    @Autowired
    private ISongService songService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<AlbumResponse> getAllAlbums() {
        return albumService.getAllAlbums().stream().map(AlbumResponse::new).collect(Collectors.toList());
    }

    @GetMapping(value ="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AlbumResponse> getAlbumById(@PathVariable long id) {
        return albumService.getAlbumById(id)
                .map(album -> ResponseEntity.ok().body(new AlbumResponse(album)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AlbumResponse> createAlbum(@RequestBody AlbumRequest albumRequest) throws NotFoundException {
        Optional<Artist> artist = artistService.getArtistById(albumRequest.getArtist());
        if (artist.isPresent()){
            Album album = new Album(albumRequest, artist.get());
            return ResponseEntity.ok().body(new AlbumResponse(albumService.saveAlbum(album)));
        }
        else{
            throw new NotFoundException();
        }

        
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AlbumResponse> updateAlbum(@PathVariable long id, @RequestBody AlbumRequest album) throws NotFoundException {
        Optional<Album> existingAlbumOpt = albumService.getAlbumById(id);
        if (!existingAlbumOpt.isPresent()) {
            throw new NotFoundException();
        }
        
        Album existingAlbum = existingAlbumOpt.get();
        existingAlbum.setTitle(album.getTitle());
        existingAlbum.setCoverPhoto(album.getCoverPhoto());
        existingAlbum.setReleaseDate(album.getReleaseDate() != null ? album.getReleaseDate() : existingAlbum.getReleaseDate());

        return ResponseEntity.ok().body(new AlbumResponse(albumService.saveAlbum(existingAlbum)));
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAlbum(@PathVariable long id) throws IllegalOperationException {
        try {
            Optional<Album> existingAlbumOpt = albumService.getAlbumById(id);
            if (!existingAlbumOpt.isPresent()) {
                return ResponseEntity.notFound().build();
            }
    
            List<Song> songs = songService.getAllSongs().stream()
                .filter(song -> song.getAlbum().getId().equals(id))
                .collect(Collectors.toList());

            songs.forEach(song -> songService.deleteSong(song.getId()));
    
            albumService.deleteAlbum(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalOperationException();
        }
    }
    
}
