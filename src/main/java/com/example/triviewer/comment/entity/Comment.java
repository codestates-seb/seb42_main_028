package com.example.triviewer.comment.entity;

import com.example.triviewer.global.audit.Auditable;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String answerContent;

/*
    // 리뷰 관계매핑
    @ManyToOne
    @JoinColumn(name = "reviewId")
    private Review review;

    // 유저 관계매핑
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
*/


}
