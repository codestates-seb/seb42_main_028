package com.example.triviewer.review.service;

import com.example.triviewer.exception.BusinessLogicException;
import com.example.triviewer.exception.ExceptionCode;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
//TODO: Insert Transactional.
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
//TODO: Change form. + Change Status.
    public Review updateReview(Review review){
        Review findReview = findVerifiedReview(review.getReviewId());

        Optional.ofNullable(review.getContent())
                .ifPresent(content -> findReview.setContent(content));
        Optional.ofNullable(review.getTitle())
                .ifPresent(title -> findReview.setTitle(title));
        Optional.ofNullable(review.getReviewStatus())
                .ifPresent(reviewStatus -> findReview.setReviewStatus(reviewStatus));

        return reviewRepository.save(findReview);
    }

    public Review findReview(long reviewId) {
        return findVerifiedReview(reviewId);
    }

    @Transactional(readOnly = true)
    public Page<Review> findReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size, Sort.by("reviewId").descending()));
    }

    //findReviews??

    public Review findVerifiedReview(Long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);

        Review findReview =
                optionalReview.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));

        return findReview;
    }

    public void deleteReview(long reviewId){
        Review findReview = findVerifiedReview(reviewId);
//        TODO: Change status.
//        findReview.setReviewStatus(Review.ReviewStatus.Review_DELETE);

//        reviewRepository.save(findReview);
        reviewRepository.delete(findReview);
    }
}