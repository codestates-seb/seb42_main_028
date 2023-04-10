package com.example.triviewer.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserPatchDto {

    private Long userId;


    @Size(min = 8, max = 20, message = "비밀번호 길이는 8 이상 20 이하여야 합니다.")
    @NotBlank(message = "비밀번호는 공백일 수 없습니다.")
    private String password;


    private String profileImage;



    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
