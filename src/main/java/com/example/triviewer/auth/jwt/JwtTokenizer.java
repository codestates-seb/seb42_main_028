package com.example.triviewer.auth.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

//로그인 인증에 성공한 클라이언트에게 JWT 를 생성 및 발급하고 요청이 들어올 때 마다 전달된 JWT 를 검증하는 역할
//Spring Container에 Bean으로 등록
@Component
public class JwtTokenizer {
    @Getter
    @Value("${jwt.secret-key}")
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;

//  Plain Text 형태인 Secret Key의 byte[]를 Base64 형식의 문자열로 인코딩
    public String encodeBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }
//    generateAccessToken()은 인증된 사용자에게 JWT를 최초로 발급해주기 위한 JWT 생성 메서드
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey) {
//        Base64 형식 Secret Key 문자열을 이용해 Key(java.security.Key) 객체를 얻습니다.
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
//        setClaims()에는 JWT에 포함 시킬 Custom Claims를 추가
                .setClaims(claims)
//        JWT에 대한 제목을 추가
                .setSubject(subject)
//        JWT 발행 일자를 설정, 파라미터 타입은 java.util.Date 타입
                .setIssuedAt(Calendar.getInstance().getTime())
//        JWT의 만료일시를 지정
                .setExpiration(expiration)
//        서명을 위한 Key(java.security.Key) 객체를 설정
                .signWith(key)
//        JWT를 생성하고 직렬화
                .compact();
    }


//    Access Token이 만료되었을 경우, Access Token을 새로 생성할 수 있게 해주는 Refresh Token을 생성
    public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
        return claims;
    }

    public void verifySignature(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jwts.parserBuilder()
//        서명에 사용된 Secret Key를 설정
                .setSigningKey(key)
                .build()
//        JWT를 파싱해서 Claims를 얻음
                .parseClaimsJws(jws);
    }

    public Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }

//    JWT의 서명에 사용할 Secret Key를 생성
    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
//        Base64 형식으로 인코딩된 Secret Key를 디코딩한 후, byte array를 반환
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
//        key byte array를 기반으로 적절한 HMAC 알고리즘을 적용한 Key(java.security.Key) 객체를 생성
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return key;
    }







}
