package com.example.triviewer.comment.mapper;

import com.example.triviewer.comment.dto.CommentPatchDto;
import com.example.triviewer.comment.dto.CommentPostDto;
import com.example.triviewer.comment.dto.CommentResponseDto;
import com.example.triviewer.comment.entity.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);

    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);

    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
