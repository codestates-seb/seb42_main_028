package com.example.triviewer.user.entity;

import com.example.triviewer.user.dto.UserDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@Table(name = "user")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //pk
    @Column(name = "user_id")
    private Long id;

    @Column(length = 50, unique = true)
    private String userEmail;

    @Column(length = 20)
    private String userPassword;
    @Column(length = 20)
    private String userNmae;
    @Column(length = 20)
    private String userMobile;

//dto를 entity변환
    public  static UserEntity toSaveEntity(UserDTO userDTO){
    UserEntity userEntity = new UserEntity();
    userEntity.setUserEmail(userDTO.getUserEmail());
    userEntity.setUserPassword(userDTO.getUserPassword());
    userEntity.setUserMobile(userDTO.getUserMobile());
    return  userEntity;
    }
}
