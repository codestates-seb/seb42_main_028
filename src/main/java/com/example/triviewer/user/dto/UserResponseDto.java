package com.example.triviewer.user.dto;

import com.example.triviewer.user.entity.User;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {

    private Long userId;

    private String email;

    private String password;
    private String userName;
    private String userMobile;

    private String profileImage;

    private List<String> roles;



}
