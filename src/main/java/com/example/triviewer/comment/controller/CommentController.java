package com.example.triviewer.comment.controller;

import com.example.triviewer.comment.dto.CommentPatchDto;
import com.example.triviewer.comment.dto.CommentPostDto;
import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.comment.mapper.CommentMapper;
import com.example.triviewer.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequiredArgsConstructor
@RequestMapping("/reviews")
@Validated
@RestController
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;

    // 댓글 등록
    @PostMapping("/{review-id}")
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto commentPostDto) {
        Comment comment = commentMapper.commentPostDtoToComment(commentPostDto);

        Comment createdComment = commentService.createComment(comment);

        return new ResponseEntity<>(commentMapper.commentToCommentResponseDto(createdComment),HttpStatus.CREATED);
    }

    // 댓글 수정
    @PatchMapping("/{comment-id}/{edit}")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @Valid @RequestBody CommentPatchDto commentPatchDto) {
        CommentPatchDto.setCommentId(commentId);

        Comment commentResponse = commentService.updateComment(commentMapper.commentPatchDtoToComment(commentPatchDto));

        return new ResponseEntity<>(commentMapper.commentToCommentResponseDto(commentResponse), HttpStatus.OK);
    }

    // 댓글 조회
    @GetMapping("/{reviews-id}")
    public ResponseEntity<Comment> getComment() {
        return null;
    }

    // 댓글 삭제
    @DeleteMapping("/{comment-id}/delete")
    public ResponseEntity deleteComment(@PathVariable("comment-id") @Positive long commentId) {
        commentService.deleteComment(commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
