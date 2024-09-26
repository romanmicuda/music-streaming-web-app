package com.example.demo.model.response;

import java.util.Date;

import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import lombok.Data;

@Data
public class AlbumResponse {
     private Long id;
    private String title;
    private String coverPhoto;
    private Date releaseDate;
    private ArtistResponse artist;

    public AlbumResponse(Album album) {
        this.id = album.getId();
        this.title = album.getTitle();
        this.coverPhoto = album.getCoverPhoto();
        this.releaseDate = album.getReleaseDate();
        this.artist = new ArtistResponse(album.getArtist());
    }
}
