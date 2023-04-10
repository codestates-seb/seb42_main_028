package com.example.triviewer.vote.repository;

import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.vote.entity.CommentVote;
import com.example.triviewer.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findByUserAndReview(User user, Review review);

    @Query(value = "select * from vote where user_id = :userId", nativeQuery = true)
    List<Vote> findAllByUserId(long userId);
}
