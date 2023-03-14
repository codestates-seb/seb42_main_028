package com.example.triviewer.review.mapper;

import com.example.triviewer.review.dto.ReviewPatchDto;
import com.example.triviewer.review.dto.ReviewPostDto;
import com.example.triviewer.review.dto.ReviewResponseDto;
import com.example.triviewer.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper {
    Review reviewPostDtoToReview(ReviewPostDto reviewPostDto);
    Review reviewPatchDtoToReview(ReviewPatchDto reviewPatchDto);
    ReviewResponseDto reviewToReviewResponseDto(Review review);
    List<ReviewResponseDto> reviewsToReviewResponseDto(List<Review> reviews);
}
