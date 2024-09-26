package com.example.demo.model.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArtitstReqest {
    private String name;
    private String bio;
    private String photoUrl;
    private List<Long> albums;
    
}
