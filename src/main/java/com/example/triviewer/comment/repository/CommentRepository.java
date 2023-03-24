package com.example.triviewer.comment.repository;

import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.review.entity.Review;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    Page<Comment> findByReview_reviewId(Long reviewId, Pageable pageable);
}
