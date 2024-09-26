package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Album;

public interface IAlbumService {

    public List<Album> getAllAlbums();

    public Optional<Album> getAlbumById(long id);

    public Album saveAlbum(Album album);

    public void deleteAlbum(long id);
}
