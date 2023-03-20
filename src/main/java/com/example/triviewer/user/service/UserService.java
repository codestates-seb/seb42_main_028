package com.example.triviewer.user.service;


import com.example.triviewer.exception.BusinessLogicException;
import com.example.triviewer.exception.ExceptionCode;
import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
//@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private PasswordEncoder encoder;

    public UserService(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());
        user.setPassword(encoder.encode(user.getPassword()));
        if (user.getEmail().equals("admin@gmail.com")) {
            user.setRoles(User.Role.ADMIN);
        } else {
            user.setRoles(User.Role.USER);
        }
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);
    }

    // voteController에서 받아오기 위해 public으로 수정
    public User findVerifiedUser(Long userId) {
        Optional<User> optionalMember = userRepository.findById(userId);
        User findUser =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findUser;
    }

    private void verifyExistsEmail(String email) {
        Optional<User> Optionaluser = userRepository.findByEmail(email);
        if (Optionaluser.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

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
