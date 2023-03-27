package com.example.triviewer.comment.dto;

import com.example.triviewer.comment.entity.Comment;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CommentListResponseDto {

    private long commentId;
    private long userId;
    private long reviewId;
    private String username;
    private String answerContent;
    private int comment_vote_count;

    public static CommentListResponseDto commentListResponseDto(Comment comment) {
        return CommentListResponseDto.builder()
                .commentId(comment.getCommentId())
                .userId(comment.getUser().getUserId())
                .reviewId(comment.getReview().getReviewId())
                .username(comment.getUser().getUserName())
                .answerContent(comment.getAnswerContent())
                .comment_vote_count(comment.getCommentLikeCount())
                .build();
    }

}
