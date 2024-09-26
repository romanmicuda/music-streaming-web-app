package com.example.demo.model.response;

import java.util.Date;

import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import com.example.demo.model.Genre;
import com.example.demo.model.Song;

import lombok.Data;

@Data
public class SongResponse {
    private Long id;
    private String title;
    private Genre genre; 
    private String songPhoto;
    private Date releaseDate;
    private int duration;
    private int views;
    private String lyrics;
    private String sourceName;
    private ArtistResponse artist;
    private AlbumResponse album;
    
    public SongResponse(Song song) {
        this.id = song.getId();
        this.title = song.getTitle();
        this.genre = song.getGenre();
        this.songPhoto = song.getSongPhoto();
        this.releaseDate = song.getReleaseDate();
        this.duration = song.getDuration();
        this.views = song.getViews();
        this.lyrics = song.getLyrics();
        this.sourceName = song.getSourceName();
        this.artist = new ArtistResponse(song.getArtist());
        this.album = new AlbumResponse(song.getAlbum());
    }
}
