package com.example.triviewer.user.controller;


import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor //생성자
@RequestMapping("/user") //user
public class UserController {
    private final UserService userService;

@GetMapping("/save-form")
    public  String saveForm(){
        return "userPages/save";
    }
}
@PostMapping("/save") //가입정보불러오기
public String save(@ModelAttribute UserDTO userDTO) {
    userService.save(UserDTO);
    return  "userPages/login";
    }
}