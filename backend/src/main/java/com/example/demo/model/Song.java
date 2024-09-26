package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.request.SongRequest;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    @Enumerated(EnumType.STRING)
    private Genre genre; 
    private String songPhoto;
    private Date releaseDate;
    private int duration;
    private int views;
    private String lyrics;
    private String sourceName;
    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;
    @ManyToOne
    @JoinColumn(name = "album_id")
    private Album album;

    public Song(SongRequest songRequest, MultipartFile uploadedSong, Album album, Artist artist,String sourceName){
        this.title = songRequest.getTitle();
        this.genre = songRequest.getGenre();
        this.songPhoto = songRequest.getSongPhoto();
        this.releaseDate = songRequest.getReleaseDate();
        this.duration = songRequest.getDuration();
        this.views = songRequest.getViews();
        this.lyrics = songRequest.getLyrics();
        this.sourceName = sourceName;
        this.artist = artist;
        this.album = album;
    }
}

