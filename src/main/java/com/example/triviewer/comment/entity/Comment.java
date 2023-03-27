package com.example.triviewer.comment.entity;

import com.example.triviewer.global.audit.Auditable;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.vote.entity.CommentVote;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String answerContent;

    // 좋아요 초깃값을 0으로 설정
    @Column(nullable = false)
    private int commentLikeCount = 0;

    // 리뷰 관계매핑
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reviewId")
    @JsonBackReference
    private Review review;

    // 유저 관계매핑
    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonBackReference
    private User user;

    @OrderBy("voteId")
    @OneToMany(mappedBy = "comment", cascade = CascadeType.REMOVE)
    private List<CommentVote> commentVotes = new ArrayList<>();

    public void addVote(CommentVote commentVote) {
        commentVotes.add(commentVote);
    }

    // Comment랑 연관관계 대상 User 객체
    public void setUser(User user) {
        this.user = user;
        if (!this.user.getCommentList().contains(this)) {
            this.user.getCommentList().add(this);
        }
    }

    // Comment랑 연관관계 대상 Review 객체
    public void setReview(Review review) {
        this.review = review;
        if (!this.review.getComments().contains(this)) {
            this.review.getComments().add(this);
        }
    }
}
