package com.example.demo.model;


import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.request.ArtitstReqest;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Artist {
    
    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Long id;
    private String name;
    private String bio;
    private String photoUrl;

    @OneToMany(mappedBy = "artist", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Album> albums;

    public Artist() {
        this.albums = new ArrayList<>();
    }

    public Artist(ArtitstReqest artitstReqest, List<Album> albums) {
        this.name = artitstReqest.getName();
        this.bio = artitstReqest.getBio();
        this.photoUrl = artitstReqest.getPhotoUrl();
        this.albums = albums;
    }
}
