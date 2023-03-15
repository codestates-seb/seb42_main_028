package com.example.triviewer.review.controller;

import com.example.triviewer.global.dto.SingleResponseDto;
import com.example.triviewer.review.dto.ReviewPostDto;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.mapper.ReviewMapper;
import com.example.triviewer.review.service.ReviewService;
import com.example.triviewer.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/reviews")
@Validated
@Slf4j
public class ReviewController {
    private final static String REVIEW_DEFAULT_URL = "/reviews";
    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    public ReviewController(ReviewService reviewService, ReviewMapper mapper) {
        this.reviewService = reviewService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postReview(@Valid @RequestBody ReviewPostDto reviewPostDto){
        Review review = mapper.reviewPostDtoToReview(reviewPostDto);
        Review createReview = reviewService.createReview(review);
        URI location = UriCreator.createUri(REVIEW_DEFAULT_URL, createReview.getReviewId());
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{review-id}")
    public ResponseEntity getReview(@PathVariable("review-id") @Positive long reviewId){
        Review review = reviewService.findReview(reviewId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToReviewResponseDto(review)), HttpStatus.OK);
    }

//    @DeleteMapping("/{review-id}")
//    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive long reviewId) {
//    }
}
