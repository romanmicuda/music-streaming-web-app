package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Genre;
import com.example.demo.model.Song;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

    List<Song> findByGenre(Genre genre);
    Optional<Song> findById(long id);
    List<Song> findByTitleContainingIgnoreCase(String title);
}
    
