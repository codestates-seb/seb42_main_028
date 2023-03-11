package com.example.triviewer.user.service;


import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.entity.UserEntity;
import com.example.triviewer.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    public  void save(UserDTO userDTO){
        UserEntity userEntity = userRepository.save(UserEntity.toSaveEntity(userDTO));

    }
}
