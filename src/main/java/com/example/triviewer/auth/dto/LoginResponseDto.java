package com.example.triviewer.auth.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Lob;

@Getter
@Setter
public class LoginResponseDto {

    private Long userId;
    private String email;
    private String password;
    private String userName;
    private String userMobile;
    private String profileImage;

}
