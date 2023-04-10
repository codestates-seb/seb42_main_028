package com.example.triviewer.auth.filter;

import com.example.triviewer.auth.jwt.JwtTokenizer;
import com.example.triviewer.auth.userdetails.MemberDetailService;
import com.example.triviewer.auth.userdetails.MemberDetails;
import com.example.triviewer.auth.utils.CustomAuthorityUtils;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtVerificationFilter extends OncePerRequestFilter {  // (1)
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    private final MemberDetailService memberDetailService;

    // (2)
    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils, MemberDetailService memberDetailService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberDetailService = memberDetailService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        Map<String, Object> claims = verifyJws(request); // (3)
        setAuthenticationToContext(claims);      // (4)Authentication 객체를 SecurityContext에 저장

        filterChain.doFilter(request, response); // (5)
    }

    // (6)
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("accessToken");  // (6-1)Authorization header의 값을 얻은 후

        return authorization == null || !authorization.startsWith("Bearer");  // (6-2)“Bearer”로 시작하지 않는다면 해당 Filter의 동작을 수행하지 않도록
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("accessToken").replace("Bearer ", ""); // (3-1)replace() 메서드를 이용해 “Bearer “부분을 제거
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()); // (3-2)
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();   // (3-3)

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {

//        MemberDetails memberDetails = (MemberDetails) memberDetailService.loadUserByUsername((String) claims.get("username"));
        String username = (String) claims.get("username");   // (4-1)JWT에서 파싱한 Claims에서 username
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));  // (4-2)JWT의 Claims에서 얻은 권한
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);  // (4-3)
        SecurityContextHolder.getContext().setAuthentication(authentication); // (4-4)Authentication 객체를 저장
    }
}
