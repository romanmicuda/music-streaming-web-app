package com.example.demo.model.response;

import java.util.List;
import java.util.stream.Collectors;
import com.example.demo.model.Album;
import com.example.demo.model.Artist;
import lombok.Data;

@Data
public class ArtistResponse {
    private Long id;
    private String name;
    private String bio;
    private String photoUrl;
    private List<Long> albums;
    
    public ArtistResponse(Artist artist){
        this.id = artist.getId();
        this.name = artist.getName();
        this.bio = artist.getBio();
        this.photoUrl = artist.getPhotoUrl();
        this.albums = artist.getAlbums().stream().map(Album::getId).collect(Collectors.toList());
    }

}
