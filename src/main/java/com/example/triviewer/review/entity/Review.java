package com.example.triviewer.review.entity;

import com.example.triviewer.audit.Auditable;
import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.vote.entity.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

//    @OneToMany(mappedBy = "review")
//    private List<S3UpImg> s3UpImgs = new ArrayList<>();

    //TODO: Set visitDate, location (latitude, longitude). Option: pointer on the map?


    // 좋아요 초깃값을 0으로 설정
    @Column(nullable = false)
    private int likeCount = 0;

    @OneToMany(mappedBy = "review", cascade = {CascadeType.PERSIST, CascadeType.REFRESH})
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @OrderBy("voteId")
    @OneToMany(mappedBy = "review", cascade = CascadeType.REMOVE)
    private List<Vote> votes = new ArrayList<>();

    public void setComment(Comment comment) {
        comments.add(comment);
        if (comment.getReview() != this) {
            comment.setReview(this);
        }
    }

    public Review(String title, String content){
        this.title = title;
        this.content = content;
    }

    public Review(Long reviewId){
        this.reviewId = reviewId;
    }
    //TODO: Specify & double check annotations.

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private ReviewStatus reviewStatus = ReviewStatus.REVIEW_REGISTRATION;

    public enum ReviewStatus {
        //TODO: Search how to interact with comment(s).
        // e.g., deleting a review causes delete all tangled comment(s).
        REVIEW_REGISTRATION("리뷰 등록 상태"),
        REVIEW_DELETE("리뷰 삭제 상태");

        @Getter
        private String status;

        ReviewStatus(String status) {
            this.status = status;
        }
    }

    public void addVote(Vote vote) {
        votes.add(vote);
    }
}
