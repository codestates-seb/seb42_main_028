package com.example.triviewer.user.dto;

import com.example.triviewer.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberResponseDto {

    private Long userId;

    private String email;

    private String password;
    private String userName;
    private String userMobile;

    private String profileImage;
    private User roles;
}
