package com.example.triviewer.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ReviewPostDto {
//TODO: Add validation.
    private String title;

    private String content;
}
