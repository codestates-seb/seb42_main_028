package com.example.triviewer.comment.entity;

import com.example.triviewer.global.audit.Auditable;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.vote.entity.CommentVote;
import com.example.triviewer.vote.entity.Vote;
import lombok.*;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.time.LocalDateTime;
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
    private long commentLikeCount = 0;

    // 리뷰 관계매핑
    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    // 유저 관계매핑
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @OrderBy("voteId")
    @OneToMany(mappedBy = "comment", cascade = CascadeType.REMOVE)
    private List<CommentVote> commentVotes = new ArrayList<>();

    public void addReview(Review review) {
        this.review = review;
        if (!this.review.getComments().contains(this)) {
            this.review.getComments().add(this);
        }
    }

    public void addVote(CommentVote commentVote) {
        commentVotes.add(commentVote);
    }
}
