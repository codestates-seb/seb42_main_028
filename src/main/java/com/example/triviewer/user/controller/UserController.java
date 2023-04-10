package com.example.triviewer.user.controller;


import com.example.triviewer.global.dto.SingleResponseDto;
import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.dto.UserPatchDto;
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
import javax.validation.constraints.Positive;


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

    @PatchMapping(value = "/{user-id}")
    public ResponseEntity patchMember(@PathVariable("user-id") @Positive long userId,
                                      @Valid @RequestBody UserPatchDto requestBody) {
        requestBody.setUserId(userId);

        User user = userService.updateUser(mapper.userPatchDtoToUser(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK);
    }
//mypage 엔드포인드
    @GetMapping("/{user-id}")
    public ResponseEntity getMember(@PathVariable("user-id") @Positive long userId) {
        User user = userService.findUser(userId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteMember(@PathVariable("user-id") @Positive long userId) {
        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    }
