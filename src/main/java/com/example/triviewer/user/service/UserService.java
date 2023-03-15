package com.example.triviewer.user.service;


import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.entity.UserEntity;
import com.example.triviewer.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public Long save(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.toSaveEntity(userDTO);
        Long saveId = userRepository.save(userEntity).getId();
        return saveId;

    }

    public boolean login(UserDTO userDTO) {

        Optional<UserEntity> optionalUserEntity = userRepository.findByUserEmail(userDTO.getUserEmail());
        if (optionalUserEntity.isPresent()) {
            UserEntity loginEntity = optionalUserEntity.get();
            if (loginEntity.getUserPassword().equals(userDTO.getUserPassword())) {
                return true;
            } else {
                return false;
            }
        } else {
                return false;
            }
        }
    }
