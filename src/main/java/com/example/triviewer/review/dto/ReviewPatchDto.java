package com.example.triviewer.review.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ReviewPatchDto {

    private long reviewId;

    private String title;

    private String content;

    //Any better options?
    public void setReviewId(long reviewId){this.reviewId = reviewId;}
}
