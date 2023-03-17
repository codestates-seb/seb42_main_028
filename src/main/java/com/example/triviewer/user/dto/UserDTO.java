package com.example.triviewer.user.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String userEmail;
    private String userPassword;
    private String userName;
    private String userMobile;

}
