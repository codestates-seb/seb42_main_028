package com.example.triviewer.auth.dto;

import lombok.Data;
import lombok.Getter;

@Data
public class LoginDto {
    private String email;
    private String password;
}
