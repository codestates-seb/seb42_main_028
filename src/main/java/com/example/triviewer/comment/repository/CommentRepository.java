package com.example.triviewer.comment.repository;

import com.example.triviewer.comment.dto.CommentPatchDto;
import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByReviewOrderByCreatedAtDesc(Review review);
    List<Comment> findByReviewOrderByCommentLikeCountDesc(Review review);

}
