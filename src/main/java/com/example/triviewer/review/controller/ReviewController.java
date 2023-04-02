package com.example.triviewer.review.controller;

import com.example.triviewer.global.dto.SingleResponseDto;
import com.example.triviewer.review.dto.ReviewPatchDto;
import com.example.triviewer.review.dto.ReviewPostDto;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.mapper.ReviewMapper;
import com.example.triviewer.review.service.ReviewService;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

//TODO: R-mapping.
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
//    admin용 글 작성.
    //TODO: yyyy-mm-dd 형식으로 visitedDate 구현.
//    @PreAuthorize(hasRole.ADMIN) or @PreAuthorize("isAuthenticates()")
//    @PostMapping("/admin")
//    public ResponseEntity postReviewAdmin(@Valid @RequestBody ReviewPostDto reviewPostDto){
////        List<User> = User.getRoles;
////        if(roles.contains("ADMIN")) {
//            Review review = mapper.reviewPostDtoToReview(reviewPostDto);
//            Review createReview = reviewService.createReview(review);
//            URI location = UriCreator.createUri(REVIEW_DEFAULT_URL, createReview.getReviewId());
//            return ResponseEntity.created(location).build();
//        }
//        else{
//            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//        }
//    }

    @PatchMapping("/{review-id}/edit")
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive long reviewId,
                                      @Valid @RequestBody ReviewPatchDto reviewPatchDto){
        reviewPatchDto.setReviewId(reviewId);

        Review review = reviewService.updateReview(mapper.reviewPatchDtoToReview(reviewPatchDto));

        return new ResponseEntity(
                new SingleResponseDto<>(mapper.reviewToReviewResponseDto(review)),
                HttpStatus.OK
        );
    }

    @GetMapping("/{review-id}")
    public ResponseEntity getReview(@PathVariable("review-id") @Positive long reviewId){
        Review review = reviewService.findReview(reviewId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToReviewResponseDto(review)), HttpStatus.OK);
    }
//TODO: Check the service.deleteReview before merge.
    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive long reviewId) {
        reviewService.deleteReview(reviewId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
