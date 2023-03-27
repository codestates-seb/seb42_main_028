package com.example.triviewer.comment.controller;

import com.example.triviewer.comment.dto.CommentListResponseDto;
import com.example.triviewer.comment.dto.CommentPatchDto;
import com.example.triviewer.comment.dto.CommentPostDto;
import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.comment.mapper.CommentMapper;
import com.example.triviewer.comment.repository.CommentRepository;
import com.example.triviewer.comment.service.CommentService;
import com.example.triviewer.global.dto.SingleResponseDto;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RequestMapping("/comment")
@Validated
@RestController
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;
    private final ReviewService reviewService;
    private final CommentRepository commentRepository;

    // 댓글 등록
    @PostMapping("/{review-id}")
    public ResponseEntity postComment(@PathVariable("review-id") @Positive long reviewId,
                                      @Valid @RequestBody CommentPostDto commentPostDto) {
        Comment comment = commentService.createComment(commentMapper.commentPostDtoToComment(commentPostDto), reviewId);
        Review review = reviewService.findReview(reviewId);
        review.setComment(comment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(commentMapper.commentToCommentResponseDto(comment)), HttpStatus.CREATED);
    }

    // 댓글 조회 및 댓글 수정 코드 수정 필요
    // 댓글 조회
    @GetMapping("/{comment-id}/check")
    public ResponseEntity getComment(@PathVariable("comment-id") @Positive long commentId) {
        Comment comment = commentService.findComment(commentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(commentMapper.commentToCommentResponseDto(comment)), HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getComments(@Positive @RequestParam int page,
//                                      @Positive @RequestParam int size) {
//        Page<Comment> pageComments = commentService.findComments(page - 1, size);
//        List<Comment> comments = pageComments.getContent();
//
//        return new ResponseEntity(new MultiResponseDto<>(commentMapper.commentToCommentResponseDto(comments), pageComments),
//                HttpStatus.OK);
//    }

    // 댓글 최신순 조회
    @GetMapping("/newest")
    public List<CommentListResponseDto> getCommentsNew(@RequestParam("id") long id) {

        return commentRepository.findByReviewOrderByCreatedAtDesc(reviewService.findVerifiedReview(id)).stream().map((ele) ->
                CommentListResponseDto.commentListResponseDto(ele)).collect(Collectors.toList());
    }

    // 댓글 좋아요 많은 순 조회
    @GetMapping("/likes")
    public List<CommentListResponseDto> getCommentsLike(@RequestParam("id") long id) {

        return commentRepository.findByReviewOrderByCommentLikeCountDesc(reviewService.findVerifiedReview(id)).stream().map((ele) ->
                CommentListResponseDto.commentListResponseDto(ele)).collect(Collectors.toList());
    }

    // 댓글 수정
    @PatchMapping("/{comment-id}/edit")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @Valid @RequestBody CommentPatchDto commentPatchDto) {
        commentPatchDto.setCommentId(commentId);

        Comment comment = commentService.updateComment(commentMapper.commentPatchDtoToComment(commentPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(commentMapper.commentToCommentResponseDto(comment)), HttpStatus.OK);
    }

    // 댓글 삭제
    @DeleteMapping("/{comment-id}/delete")
    public ResponseEntity deleteComment(@PathVariable("comment-id") @Positive long commentId) {
        commentService.deleteComment(commentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(null), HttpStatus.NO_CONTENT);
    }

}
