package com.example.triviewer.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class CommentPostDto {

    private long reviewId;
    private long userId;
    @NotBlank(message = "댓글은 공백일 수 없습니다.")
    private String answerContent;

    public void setReviewId(long reviewId) {
        Assert.notNull(reviewId, "Review ID는 null일 수 없습니다.");
        this.reviewId = reviewId;
    }

}