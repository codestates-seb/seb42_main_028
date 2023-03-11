package com.example.triviewer.review.entity;

import com.example.triviewer.audit.Auditable;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

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
}
