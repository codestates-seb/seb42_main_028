package com.example.triviewer.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class CommentPatchDto {

    private long commentId;
    @NotBlank(message = "댓글은 공백일 수 없습니다.")
    private String answerContent;

    public void setCommentId(long commentId) {
        Assert.notNull(commentId, "Review ID must not be null.");
        this.commentId = commentId;
    }
}
