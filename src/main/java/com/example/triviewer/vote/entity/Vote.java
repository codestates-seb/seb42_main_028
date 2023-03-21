package com.example.triviewer.vote.entity;

import com.example.triviewer.global.audit.Auditable;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Vote extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private VoteType voteType;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "reviewId")
    private Review review;

    public Vote(User user, Review review) {
        this.user = user;
        this.review = review;
    }

    public void addUser(User user) {
        this.user = user;
        user.addVote(this);
    }

    public void addReview(Review review) {
        this.review = review;
        review.addVote(this);
    }
}
