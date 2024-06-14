package com.abhinav3254.exam_portal.model;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String email;

    private String phone;

    private String password;

    @Temporal(TemporalType.DATE)
    private Date dob;

    @Column(name = "gender")
    private String gender;

    @OneToOne
    @JoinColumn(name = "role_id")
    private Role role;

}
