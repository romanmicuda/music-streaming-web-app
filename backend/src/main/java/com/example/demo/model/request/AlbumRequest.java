package com.example.demo.model.request;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlbumRequest {
    private String title;
    private String coverPhoto;
    private Date releaseDate;
    private Long artist;
}
