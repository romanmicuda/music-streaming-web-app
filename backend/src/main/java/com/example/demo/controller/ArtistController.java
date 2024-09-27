package com.example.demo.controller;

import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import com.example.demo.model.Song;
import com.example.demo.model.request.ArtitstReqest;
import com.example.demo.model.response.ArtistResponse;
import com.example.demo.service.AlbumService;
import com.example.demo.service.ArtistService;
import com.example.demo.service.SongService;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;

@RestController
@RequestMapping("/artists")
public class ArtistController {

    @Autowired
    private ArtistService artistService;

    @Autowired
    private AlbumService albumService;

    @Autowired
    private SongService songService;

     private static final Logger logger = LoggerFactory.getLogger(ArtistController.class);


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ArtistResponse>> getAllArtists() {
        List<ArtistResponse> artistsResponses = artistService.getAllArtists().stream().map(ArtistResponse::new).collect(Collectors.toList());
        return ResponseEntity.ok(artistsResponses);
    }

    @GetMapping(value = "/name/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ArtistResponse>> getAllArtists(@PathVariable String name) {
        List<ArtistResponse> artistsResponses = artistService.getArtistByName(name).stream().map(ArtistResponse::new).collect(Collectors.toList());
        return ResponseEntity.ok(artistsResponses);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArtistResponse> getArtistById(@PathVariable Long id) {
        Optional<Artist> artist = artistService.getArtistById(id);
        return artist.map(ArtistResponse::new).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArtistResponse> createArtist(@RequestBody ArtitstReqest artitstReqest) {
        List<Album> albums = albumService.getAllAlbums().stream()
                                .filter(album-> artitstReqest.getAlbums()
                                .contains(album.getId())).collect(Collectors.toList());
        Artist artist = artistService.saveArtist(new Artist(artitstReqest, albums));
        return ResponseEntity.ok(new ArtistResponse(artist));
    }

     @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArtist(@PathVariable long id) {
        logger.info("Attempting to delete artist with ID: {}", id);

        Optional<Artist> artistOpt = artistService.getArtistById(id);
        if (artistOpt.isPresent()) {
            Artist artist = artistOpt.get();
            List<Song> songs = songService.getAllSongs().stream()
                .filter(song -> song.getArtist().getId().equals(id))
                .collect(Collectors.toList());

            songs.forEach(song -> {
                try {
                    songService.deleteSong(song.getId());
                    logger.info("Deleted song with ID: {}", song.getId());
                } catch (Exception e) {
                    logger.error("Error deleting song with ID: {} - {}", song.getId(), e.getMessage());
                }
            });

            artist.getAlbums().forEach(album -> {
                try {
                    albumService.deleteAlbum(album.getId());
                    logger.info("Deleted album with ID: {}", album.getId());
                } catch (Exception e) {
                    logger.error("Error deleting album with ID: {} - {}", album.getId(), e.getMessage());
                }
            });

            try {
                artistService.deleteArtist(id);
                logger.info("Deleted artist with ID: {}", id);
                return ResponseEntity.noContent().build();
            } catch (Exception e) {
                logger.error("Error deleting artist with ID: {} - {}", id, e.getMessage());
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        } else {
            logger.warn("Artist with ID: {} not found", id);
            return ResponseEntity.notFound().build();
        }
    }
}