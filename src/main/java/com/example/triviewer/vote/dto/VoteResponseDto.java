package com.example.triviewer.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class VoteResponseDto {

    private long voteId;
    private long userId;
    private long reviewId;
    private int likeCount;
}
