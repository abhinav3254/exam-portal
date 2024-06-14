package com.abhinav3254.exam_portal.dto;


import lombok.Data;

import java.util.Date;

@Data
public class RegisterDTO {

    private String name;
    private String email;
    private String phone;
    private String password;
    private Date dob;
    private String gender;

}
