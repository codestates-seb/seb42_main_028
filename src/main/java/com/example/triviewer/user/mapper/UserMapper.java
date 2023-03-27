package com.example.triviewer.user.mapper;

import com.example.triviewer.user.dto.UserPatchDto;
import com.example.triviewer.user.dto.UserPostDto;
import com.example.triviewer.user.dto.UserResponseDto;
import com.example.triviewer.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostDtoToUser(UserPostDto requestBody);

    User userPatchDtoToUser(UserPatchDto requestBody);


    User userToUserResponseDto(User user);


    UserResponseDto userPageResponseDto(User user);

}
