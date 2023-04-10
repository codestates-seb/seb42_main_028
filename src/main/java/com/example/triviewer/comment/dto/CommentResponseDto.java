package com.example.triviewer.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class CommentResponseDto {
    private long commentId;
    private long userId;
    private long reviewId;
    private String answerContent;
}
