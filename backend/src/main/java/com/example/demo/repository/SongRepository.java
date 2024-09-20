package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Song;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

    List<Song> findByGenre(String genre);

}
