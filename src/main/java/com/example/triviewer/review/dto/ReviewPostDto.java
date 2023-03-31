package com.example.triviewer.review.dto;

import com.example.triviewer.s3.S3UpImgService;
import com.example.triviewer.user.entity.User;
import lombok.Builder;
import lombok.Getter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class ReviewPostDto {

    @NotBlank(message = "제목을 입력해주세요")
    private String title;

    @NotBlank(message = "내용을 입력해주세요")
    private String content;

    @NotBlank(message = "방문일자를 입력해주세요")
    private String visitDate;

//    @NotBlank(message = "사진을 업로드해주세요")
//    private List<String> image = S3UpImgService;

//    public void setUserRoles(List<String> roles){this.roles = User.roles;}
}
