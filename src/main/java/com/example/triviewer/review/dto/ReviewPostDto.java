package com.example.triviewer.review.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
//TODO: More about @Builder.
@Getter
@Builder
public class ReviewPostDto {

    @NotBlank(message = "제목을 입력해주세요")
    private String title;

    @NotBlank(message = "내용을 입력해주세요")
    private String content;
}
