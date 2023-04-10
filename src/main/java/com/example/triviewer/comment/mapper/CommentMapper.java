package com.example.triviewer.comment.mapper;

import com.example.triviewer.comment.dto.CommentPatchDto;
import com.example.triviewer.comment.dto.CommentPostDto;
import com.example.triviewer.comment.dto.CommentResponseDto;
import com.example.triviewer.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);

    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);

    @Mapping(source = "review.reviewId", target = "reviewId")
    @Mapping(source = "user.userId", target = "userId")
    CommentResponseDto commentToCommentResponseDto(Comment comment);

    List<CommentResponseDto> commentToCommentResponseDto(List<Comment> comments);
}
