package com.example.triviewer.auth.userdetails;

import com.example.triviewer.auth.utils.CustomAuthorityUtils;
import com.example.triviewer.exception.BusinessLogicException;
import com.example.triviewer.exception.ExceptionCode;
import com.example.triviewer.user.entity.User;
import com.example.triviewer.user.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;
/**
 * 데이터베이스에서 사용자의 크리덴셜을 조회한 후, AuthenticationManager 에게 전달하는 역할
 */
@Component
public class MemberDetailService implements UserDetailsService {


    private UserRepository userRepository;
    private CustomAuthorityUtils authorityUtils;

    public MemberDetailService(UserRepository userRepository, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.authorityUtils = authorityUtils;
    }

    /**
     * request 로 들어온 이메일로 DB에 저장된 유저 찾기
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalMember = userRepository.findByEmail(username);
        User findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(
                ExceptionCode.MEMBER_NOT_FOUND));


        return new MemberDetails(findMember);
    }


}
