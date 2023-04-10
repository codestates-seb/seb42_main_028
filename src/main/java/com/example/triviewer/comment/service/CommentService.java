package com.example.triviewer.comment.service;

import com.example.triviewer.comment.dto.CommentPatchDto;
import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.comment.repository.CommentRepository;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.service.ReviewService;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.user.repository.UserRepository;
import com.example.triviewer.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final ReviewService reviewService;
    private final UserService userService;
    private final UserRepository userRepository;

    // 댓글 등록
    public Comment createComment(Comment comment, long reviewId) {
        Review review = reviewService.findReview(reviewId);
        comment.setReview(review);

        return commentRepository.save(comment);
    }

    // 댓글 찾기

    public Comment findComment(long commentId) {

        return findVerifiedComment(commentId);
    }
    // 댓글 전체 찾기

//    public Page<Comment> findComments(int page, int size) {
//        return commentRepository.findAll(PageRequest.of(page, size,
//                Sort.by("reviewId").descending()));
//    }

//    public Page<Comment> findComments(int page, int size) {
//        return commentRepository.findAll(PageRequest.of(page, size,
//                Sort.by("commentId").and(Sort.by("reviewId")).descending()));
//    }



    // 댓글 수정
    public Comment updateComment(Comment comment) {
        // 1. 답변이 있는지 확인 없으면 오류 출력
        Comment findComment = findVerifiedComment(comment.getCommentId());
        // 2. 답변은 답변 작성자만 수정이 가능
        Optional.ofNullable(comment.getAnswerContent())
                .ifPresent(answerContent -> findComment.setAnswerContent(answerContent));

        return commentRepository.save(findComment);
    }

//    private void verifiedComment(Comment comment) {
//        // 회워 존재 여부 확인
//        userService.findUser(comment.getUser().getUserId());
//    }

    // 댓글 삭제
    public void deleteComment(long commentId) {
        commentRepository.delete(findVerifiedComment(commentId));
    }

    // 댓글이 없으면 오류 메세지 출력
    public Comment findVerifiedComment(long commentId) {
        // 댓글 존재 여부 확인(없으면 예외코드 출력)
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        // BusinessLogic으로 수정 필요
        return optionalComment.orElseThrow(() -> new RuntimeException("Comment_Not_found"));
    }
}
