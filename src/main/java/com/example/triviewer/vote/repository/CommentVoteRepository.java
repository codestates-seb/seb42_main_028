package com.example.triviewer.vote.repository;

import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.vote.entity.CommentVote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CommentVoteRepository extends JpaRepository<CommentVote, Long> {

    Optional<CommentVote> findByUserAndComment(User user, Comment comment);

    @Query(value = "select * from vote where user_id = :userId", nativeQuery = true)
    List<CommentVote> findCommentAllByUserId(long userId);
}
