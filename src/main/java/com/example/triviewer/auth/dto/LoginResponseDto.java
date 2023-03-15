package com.example.triviewer.auth.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Lob;

@Getter
@Setter
public class LoginResponseDto {
    private Long userId;
    private String userName;
    private String email;
    @Lob
    private String iconImage;


}
