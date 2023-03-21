package com.example.triviewer.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class VoteDto {
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Patch {
        @NotBlank
        private long reviewId;

        @NotBlank
        private String voteType;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    @Builder
    static public class Response {

        private long userId;
        private long voteId;
        private long reviewId;
        private String voteType;
    }
}
