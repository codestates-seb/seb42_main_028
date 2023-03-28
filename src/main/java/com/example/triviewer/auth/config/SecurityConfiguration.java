package com.example.triviewer.auth.config;


import com.example.triviewer.auth.filter.JwtAuthenticationFilter;
import com.example.triviewer.auth.filter.JwtVerificationFilter;
import com.example.triviewer.auth.handler.*;
import com.example.triviewer.auth.jwt.JwtTokenizer;
import com.example.triviewer.auth.userdetails.MemberDetailService;
import com.example.triviewer.auth.utils.CustomAuthorityUtils;
import com.example.triviewer.user.repository.UserRepository;
import com.example.triviewer.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {

    @Value("${spring.security.oauth2.client.registration.google.clientId}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
    private String clientSecret;
    private final JwtTokenizer jwtTokenizer;
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberDetailService memberDetailService;


    private final UserService userService;





    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())  // (1) 추가
                .accessDeniedHandler(new UserAccessDeniedHandler())            // (2) 추가
                .and()
                .apply(new CustomFilterConfigurer())   // (1)
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        /*
                         조건 추가
                         */
                        .anyRequest().permitAll())
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, userService))  // (1)
                );
//                        .userInfoEndpoint()
//                        .userService(customOAuth2UserService)

        return http.build();
    }

    @Bean
    public static PasswordEncoder passwordEncoder(){ //static으로 순환참조 해결
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {  // (2-1)
        @Override
        public void configure(HttpSecurity builder) throws Exception {  // (2-2)
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);  // (2-3)

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, userRepository);  // (2-4)
//            디폴트 request URL변경
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");          // (2-5)

            jwtAuthenticationFilter.setAuthenticationSuccessHandler(
                    new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(
                    new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils, memberDetailService);


            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }

    }


}
