package com.example.triviewer.vote.service;

import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.comment.repository.CommentRepository;
import com.example.triviewer.exception.BusinessLogicException;
import com.example.triviewer.exception.ExceptionCode;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.review.repository.ReviewRepository;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.vote.entity.CommentVote;
import com.example.triviewer.vote.entity.Vote;
import com.example.triviewer.vote.entity.VoteType;
import com.example.triviewer.vote.repository.CommentVoteRepository;
import com.example.triviewer.vote.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VoteService {
    private final VoteRepository voteRepository;
    private final ReviewRepository reviewRepository;
    private final CommentRepository commentRepository;
    private final CommentVoteRepository commentVoteRepository;

    public Vote createVote(User user, Review review) {
        Vote vote;
        int voteStatus = 0;
        // 좋아요를 안눌렀을 경우
        if (isNotAlreadyVote(user, review)) {
            vote = new Vote(user, review);
            vote.setVoteType(VoteType.ADD);
            voteStatus = 1;
        } else { // 좋아요를 취소한 경우
            vote = findVerifiedVote(user, review);
            switch (vote.getVoteType()) {
                case ADD:
                    vote.setVoteType(VoteType.REMOVE);
                    voteStatus = -1;
                    break;
                case REMOVE:
                    vote.setVoteType(VoteType.ADD);
                    voteStatus = 1;
                    break;
                default:
            }
        }

        int voteCount = review.getLikeCount();
        voteCount += voteStatus;
        review.setLikeCount(voteCount);
        reviewRepository.save(review);
        Vote savedVote = voteRepository.save(vote);
        return savedVote;
    }

    private boolean isNotAlreadyVote(User user, Review review) {
        return voteRepository.findByUserAndReview(user, review).isEmpty();
    }

    public Vote findVerifiedVote(User user, Review review) {
        Optional<Vote> optionalVote = voteRepository.findByUserAndReview(user, review);
        Vote vote = optionalVote.orElseThrow(() -> new BusinessLogicException(ExceptionCode.VOTE_NOT_FOUND));

        return vote;
    }

    public CommentVote createCommentVote(User user, Comment comment) {
        CommentVote commentVote;
        int commentVoteStatus = 0;
        // 좋아요를 안눌렀을 경우
        if (isNotAlreadyCommentVote(user, comment)) {
            commentVote = new CommentVote(user, comment);
            commentVote.setCommntVoteType(VoteType.ADD);
            commentVoteStatus = 1;
        } else { // 좋아요를 취소한 경우
            commentVote = findVerifiedCommentVote(user, comment);
            switch (commentVote.getCommntVoteType()) {
                case ADD:
                    commentVote.setCommntVoteType(VoteType.REMOVE);
                    commentVoteStatus = -1;
                    break;
                case REMOVE:
                    commentVote.setCommntVoteType(VoteType.ADD);
                    commentVoteStatus = 1;
                    break;
                default:
            }
        }

        long commentVoteCount = comment.getCommentLikeCount();
        commentVoteCount += commentVoteStatus;
        comment.setCommentLikeCount(commentVoteCount);
        commentRepository.save(comment);
        CommentVote savedCommentVote = commentVoteRepository.save(commentVote);
        return savedCommentVote;
    }

    private boolean isNotAlreadyCommentVote(User user, Comment comment) {
        return commentVoteRepository.findByUserAndComment(user, comment).isEmpty();
    }

    public CommentVote findVerifiedCommentVote(User user, Comment comment) {
        Optional<CommentVote> optionalCommentVote = commentVoteRepository.findByUserAndComment(user, comment);
        CommentVote commentVote = optionalCommentVote.orElseThrow(() -> new BusinessLogicException(ExceptionCode.VOTE_NOT_FOUND));

        return commentVote;
    }
}
