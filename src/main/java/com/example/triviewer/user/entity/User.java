package com.example.triviewer.user.entity;

import com.example.triviewer.audit.Auditable;
import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.review.entity.Review;
import com.example.triviewer.vote.entity.CommentVote;
import com.example.triviewer.vote.entity.Vote;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
public class User extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //pk
    @Column
    private Long userId;

    @Column(length = 100, unique = true)
    private String email;

    @Column(length = 1000000000)
    private String password;
    @Column(length = 100)
    private String userName;
    @Column(length = 100)
    private String userMobile;

    private String profileImage;

    // (1) User의 권한 정보 테이블과 매핑되는 정보
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();


    //멤버 삭제하면 댓글도 삭제
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    //순환참조 방지! 자식테이블에 @JsonBackReference 추가하면 된다고 합니다
    @JsonManagedReference
    private List<Comment> commentList = new ArrayList<>();


    //멤버 삭제하면 글도 삭제
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    //순환참조 방지! 자식테이블에 @JsonBackReference 추가하면 된다고 합니다
    @JsonManagedReference
    private List<Review> reviewList = new ArrayList<>();

    // 유저 삭제시 좋아요도 삭제, 좋아요 매핑
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Vote> votes = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<CommentVote> commentVotes = new ArrayList<>();

//dto를 entity변환
//    public  static UserEntity toSaveEntity(UserDTO userDTO){
//    UserEntity userEntity = new UserEntity();
//    userEntity.setUserEmail(userDTO.getUserEmail());
//    userEntity.setUserPassword(userDTO.getUserPassword());
//    userEntity.setUserMobile(userDTO.getUserMobile());
//    return  userEntity;
//    }


    public enum Role {
        USER("ROLE_USER"),
        ADMIN("ROLE_ADMIN");

        @Getter
        private String status;

        Role(String status) {
            this.status = status;
        }}

    public void addVote(Vote vote) {
        votes.add(vote);
    }

    public void addCommentVote(CommentVote commentVote) {
        commentVotes.add(commentVote);
    }

    public enum UserRole {
        ROLE_USER,
        ROLE_ADMIN

    }
}
