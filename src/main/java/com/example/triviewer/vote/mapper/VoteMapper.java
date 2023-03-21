package com.example.triviewer.vote.mapper;

import com.example.triviewer.review.entity.Review;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.vote.dto.VoteDto;
import com.example.triviewer.vote.entity.Vote;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    Vote votePatchDtoToEntity(VoteDto.Patch requestBody);

    default VoteDto.Response voteToVoteResponseDto(Vote vote) {
        User user = vote.getUser();
        Review review = vote.getReview();

        return VoteDto.Response.builder()
                .userId(user.getUserId())
                .voteId(vote.getVoteId())
                .reviewId(review.getReviewId())
                .voteType(vote.getVoteType().toString())
                .build();
    }

    List<VoteDto.Response> votesToVoteResponseDtos(List<Vote> vote);
}
