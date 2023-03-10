package com.example.triviewer.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class CommentPatchDto {

    private long commentId;
    @NotBlank(message = "댓글은 공백일 수 없습니다.")
    private String answerContent;

}
