package com.example.demo.model.request;

import java.util.Date;
import java.util.List;

import com.example.demo.model.Genre;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SongRequest {
    private String title;
    private Genre genre; 
    private String songPhoto;
    private Date releaseDate;
    private int duration;
    private int views;
    private String lyrics;
    private Long artist;
    private Long album;
}
