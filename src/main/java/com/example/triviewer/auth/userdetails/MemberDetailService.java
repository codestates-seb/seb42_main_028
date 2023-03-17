package com.example.triviewer.auth.userdetails;

import com.example.triviewer.exception.BusinessLogicException;
import com.example.triviewer.exception.ExceptionCode;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;
/**
 * 데이터베이스에서 사용자의 크리덴셜을 조회한 후, AuthenticationManager 에게 전달하는 역할
 */
public class MemberDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    /**
     * request 로 들어온 이메일로 DB에 저장된 유저 찾기
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalMember = userRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(
                ExceptionCode.MEMBER_NOT_FOUND));

        return new MemberDetails(findMember);
    }


}
