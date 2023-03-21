package com.example.triviewer.vote.controller;

import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.repository.ReviewRepository;
import com.example.triviewer.review.service.ReviewService;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.user.service.UserService;
import com.example.triviewer.vote.dto.VoteDto;
import com.example.triviewer.vote.entity.Vote;
import com.example.triviewer.vote.entity.VoteType;
import com.example.triviewer.vote.mapper.VoteMapper;
import com.example.triviewer.vote.repository.VoteRepository;
import com.example.triviewer.vote.service.VoteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@Slf4j
@Validated
@RestController
@RequestMapping("likes")
@RequiredArgsConstructor
public class VoteController {

    private final VoteMapper voteMapper;
    private final VoteService voteService;
    private final UserService userService;
    private final ReviewService reviewService;
    private final VoteRepository voteRepository;

    @PostMapping("/{user-id}/{review-id}/review")
    public ResponseEntity likeInsert(@PathVariable("user-id") @Positive long userId,
                                     @PathVariable("review-id") @Positive long reviewId) {
        User user = userService.findVerifiedUser(userId);

        Review review = reviewService.findReview(reviewId);
        Vote vote = voteService.createVote(user, review);
        VoteDto.Response response = voteMapper.voteToVoteResponseDto(vote);

        if (vote.getVoteType() == VoteType.REMOVE) {
            voteRepository.delete(vote);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
