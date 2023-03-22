package com.example.triviewer.vote.entity;

import com.example.triviewer.comment.entity.Comment;
import com.example.triviewer.global.audit.Auditable;
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
public class CommentVote extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private VoteType commntVoteType;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "commentId")
    private Comment comment;

    public CommentVote(User user, Comment comment) {
        this.user = user;
        this.comment = comment;
    }

    public void addUser(User user) {
        this.user = user;
        user.addCommentVote(this);
    }

    public void addComment(Comment comment) {
        this.comment = comment;
        comment.addVote(this);
    }
}
