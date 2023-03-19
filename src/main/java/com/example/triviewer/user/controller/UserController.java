package com.example.triviewer.user.controller;


import com.example.triviewer.global.dto.SingleResponseDto;
import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.dto.UserPostDto;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.user.mapper.UserMapper;
import com.example.triviewer.user.repository.UserRepository;
import com.example.triviewer.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@Slf4j
@RestController
@RequiredArgsConstructor //생성자
@RequestMapping("/users") //user
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

    private final UserMapper mapper;
//    private com.example.triviewer.user.dto.UserDTO UserDTO;


    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto requestBody) {

        User user = userService.createUser(mapper.userPostDtoToUser(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.CREATED);
    }

/*    @GetMapping("/save-form")
    public  String saveForm(){
        return "userPages/save";
    }
    @GetMapping("/login-form")
    public  String loginForm(){
        return "userPages/login";
    }
@PostMapping("/save") //가입정보불러오기
public String save(@ModelAttribute UserDTO userDTO) {
    userService.save(UserDTO);
    return  "userPages/login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute UserDTO userDTO){
        boolean loginResult = userService.login(userDTO);
        if(loginResult) {
            return "userPages/main";
            }else
                return "userPages/login";
        }*/
    }
