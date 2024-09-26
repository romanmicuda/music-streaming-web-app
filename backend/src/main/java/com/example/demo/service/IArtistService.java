package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Artist;

public interface IArtistService {
     public List<Artist> getAllArtists();
     public Optional<Artist> getArtistById(Long id);
     public Artist saveArtist(Artist artist);
     public void deleteArtist(long id);
}
