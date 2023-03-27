package com.example.triviewer.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.*;



@Getter
@Setter
@NoArgsConstructor
public class UserPostDto {

    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    private String email;


    @Size(min = 8, max = 20, message = "비밀번호 길이는 8 이상 20 이하여야 합니다.")
    @NotBlank(message = "비밀번호는 공백일 수 없습니다.")
    private String password;

    @NotBlank( message  = "이름은 필수 입력 값입니다.")
    @Length(max = 16)
    private String userName;





}
