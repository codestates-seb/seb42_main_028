package com.example.triviewer.review.service;

import com.example.triviewer.exception.BusinessLogicException;
import com.example.triviewer.exception.ExceptionCode;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review createReview(Review review) {
        Review savedReview = reviewRepository.save(review);
        return savedReview;
    }

    public Review findReview(long reviewId) {
        return findVerifiedReview(reviewId);
    }

    public Review findVerifiedReview(Long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);

        Review findReview =
                optionalReview.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));

        return findReview;
    }
}