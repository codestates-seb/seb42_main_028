package com.example.triviewer.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class VotePostDto {

    private long userId;
    private long reviewId;
    private int likeCount;
}
