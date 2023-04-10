package com.example.triviewer.review.dto;

import com.example.triviewer.review.entity.Review;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class ReviewResponseDto {
    private Long reviewId;
    private String title;
    private String content;
    private String visitDate;
//    private List<String> image;
    private Review.ReviewStatus reviewStatus;
    private LocalDateTime createdAt;

    //TODO: Handle comments.
    // private List<Comment> comments;

    public String getReviewStatus(){ return reviewStatus.getStatus();}
}
