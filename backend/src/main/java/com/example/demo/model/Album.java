package com.example.demo.model;

import java.util.Date;

import com.example.demo.model.request.AlbumRequest;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Album {
    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Long id;
    private String title;
    private String coverPhoto;
    private Date releaseDate;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public Album(AlbumRequest albumRequest, Artist artist) {
        this.title = albumRequest.getTitle();
        this.coverPhoto = albumRequest.getCoverPhoto();
        this.releaseDate = albumRequest.getReleaseDate();
        this.artist = artist;
    }
}
