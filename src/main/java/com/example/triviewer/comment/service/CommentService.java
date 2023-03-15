package com.example.triviewer.comment.service;

import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
//    private final ReviewService reviewService;
//    private final UserService userService;

    // 댓글 등록
    public Comment createComment(Comment comment) {

        return commentRepository.save(comment);
    }

    // 댓글 수정
    public Comment updateComment(Comment comment) {
        // 1. 답변이 있는지 확인
        Comment findComment = findVerifiedComment(comment.getCommentId());
        // 2. 답변은 답변 작성자만 수정이 가능


//        findComment.setModifiedAt(LocalDateTime.now());
        return commentRepository.save(findComment);
    }

    public Comment findComment(long CommentId) {
        return findVerifiedComment(CommentId);
    }

    private void verifiedComment(Comment comment) {
        // 회워 존재 여부 확인
//        userService.findVerifiedUser(comment.getUser().getUserId);
    }

    public Comment findVerifiedComment(long CommentId) {
        // 댓글 존재 여부 확인(없으면 예외코드 출력)
        Optional<Comment> optionalComment = commentRepository.findById(CommentId);

        return optionalComment.orElseThrow(() -> new RuntimeException("Comment_Not_found"));
    }


    // 댓글 삭제
    public void deleteComment(long commentId) {
        commentRepository.delete(findVerifiedComment(commentId));
    }


}
