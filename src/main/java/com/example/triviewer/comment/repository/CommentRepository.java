package com.example.triviewer.comment.repository;

import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.review.entity.Review;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByReviewOrderByCreatedAtDesc(Review review, Pageable pageable);
    List<Comment> findByReviewOrderByCommentLikeCountDesc(Review review, Pageable pageable);

}
