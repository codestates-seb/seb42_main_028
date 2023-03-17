package com.example.triviewer.user.service;


import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

//    public Long save(UserDTO userDTO) {
//        User user = User.toSaveEntity(userDTO);
//        Long saveId = userRepository.save(user).getId();
//        return saveId;
//
//    }
//
//    public boolean login(UserDTO userDTO) {
//
//        Optional<User> optionalUserEntity = userRepository.findByUserEmail(userDTO.getUserEmail());
//        if (optionalUserEntity.isPresent()) {
//            User loginEntity = optionalUserEntity.get();
//            if (loginEntity.getUserPassword().equals(userDTO.getUserPassword())) {
//                return true;
//            } else {
//                return false;
//            }
//        } else {
//                return false;
//            }
//        }
    }
