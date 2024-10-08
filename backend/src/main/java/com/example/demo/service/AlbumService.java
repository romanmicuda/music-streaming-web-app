package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Album;

import java.util.List;
import java.util.Optional;

import com.example.demo.repository.AlbumRepository;

@Service
public class AlbumService implements IAlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    @Override
    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    @Override
    public Optional<Album> getAlbumById(long id) {
        return albumRepository.findById(id);
    }

    @Override
    public Album saveAlbum(Album album) {
        return albumRepository.save(album);
    }

    @Override
    public void deleteAlbum(long id) {
        albumRepository.deleteById(id);
    }

    @Override
    public List<Album> getAlbumByTitle(String title) {
        return albumRepository.findByTitleContainingIgnoreCase(title);
    }

    
}