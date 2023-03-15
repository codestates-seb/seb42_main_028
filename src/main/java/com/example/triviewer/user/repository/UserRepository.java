package com.example.triviewer.user.repository;

import com.example.triviewer.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


//entity pk 타입
public interface UserRepository extends JpaRepository<UserEntity, Long> {


    Optional<UserEntity> findByUserEmail(String userEmail);
}
