package com.example.triviewer.user.service;


import com.example.triviewer.auth.utils.CustomAuthorityUtils;
import com.example.triviewer.exception.BusinessLogicException;
import com.example.triviewer.exception.ExceptionCode;
import com.example.triviewer.user.dto.UserDTO;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
//@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private PasswordEncoder encoder;

    private CustomAuthorityUtils customAuthorityUtils;

    public UserService(UserRepository userRepository, PasswordEncoder encoder, CustomAuthorityUtils customAuthorityUtils) {
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.customAuthorityUtils = customAuthorityUtils;
    }

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());
        List<GrantedAuthority> authorities = createAuthorities(User.UserRole.ROLE_USER.name());
        user.setPassword(encoder.encode(user.getPassword()));
        List<String> roles = customAuthorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

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

    private List<GrantedAuthority> createAuthorities(String... roles) {

        return Arrays.stream(roles)
                .map(role -> new SimpleGrantedAuthority(role))
                .collect(Collectors.toList());
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
