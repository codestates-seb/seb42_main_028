package com.example.triviewer.auth.userdetails;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import com.example.triviewer.user.entity.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Data
public class MemberDetails extends User implements UserDetails, OAuth2User {

    private User user;
    private Map<String, Object> attributes;

    // Local 로그인 사용


    public MemberDetails(User user) {
        this.user = user;
    }

    // OAuth2 로그인 사용
    public MemberDetails(User user, Map<String, Object> attributes) {
        this.user = user;
        this.attributes = attributes;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<String> roles = this.getRoles();
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    // OAuth2User 구현
    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    // OAuth2User 구현
    @Override
    public String getName() {
        String sub = attributes.get("sub").toString();
        return sub;
    }



}
