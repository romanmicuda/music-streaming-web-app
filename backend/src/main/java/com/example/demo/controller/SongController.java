package com.example.demo.controller;

import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import com.example.demo.model.Song;
import com.example.demo.model.request.SongRequest;
import com.example.demo.model.response.SongResponse;
import com.example.demo.service.IAlbumService;
import com.example.demo.service.IArtistService;
import com.example.demo.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/songs")
public class SongController {

    @Autowired
    private ISongService songService;

    @Autowired
    private IAlbumService albumService;

    @Autowired
    private IArtistService artistService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<SongResponse> getAllSongs() {
        return songService.getAllSongs().stream().map(SongResponse::new).collect(Collectors.toList());
    }

    
    @GetMapping(value = "/genre/{genre}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<SongResponse>> getSongsByGenre(@PathVariable String genre) {
    List<Song> songs = songService.getAllSongsByGenre(genre);
    if (!songs.isEmpty()) {
        return ResponseEntity.ok(songs.stream().map(SongResponse::new).collect(Collectors.toList()));
    } else {
        return ResponseEntity.notFound().build();
    }
    }

    @GetMapping(value ="/{id}")
    public ResponseEntity<Resource> getSongById(@PathVariable long id) throws NotFoundException {
        Resource songResource = songService.getSongById(id);
        System.out.println("Controller "+id);
        return ResponseEntity.ok().contentType(MediaType.parseMediaType("audio/mpeg")).body(songResource);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<SongResponse> createSong(@RequestPart("song") SongRequest songRequest, @RequestPart("songFile") MultipartFile uploadedSong) {
        if (uploadedSong == null || uploadedSong.isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }
        Optional<Album> album = albumService.getAlbumById(songRequest.getAlbum());
        Optional<Artist> artist = artistService.getArtistById(songRequest.getArtist());
        if (album.isPresent() && artist.isPresent()){
            Song createdSong = songService.createSong(songRequest, uploadedSong, album.get(), artist.get());
            return ResponseEntity.ok(new SongResponse(createdSong));
        }else {
            return ResponseEntity.noContent().build();
        }

    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SongResponse> updateSong(@PathVariable Long id, @RequestBody SongRequest songRequest) throws NotFoundException {
        try {
            Optional<Artist> artist = artistService.getArtistById(songRequest.getArtist());
            Optional<Album> album = albumService.getAlbumById(songRequest.getAlbum());
            if (artist.isPresent() && album.isPresent()){
                Song updatedSong = songService.updateSong(id, songRequest, artist.get(), album.get());
                return ResponseEntity.ok(new SongResponse(updatedSong));
            }else{
                return ResponseEntity.badRequest().build();
            }

        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSong(@PathVariable Long id) {
        try {
            songService.deleteSong(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
