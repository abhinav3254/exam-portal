package com.abhinav3254.exam_portal.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor @NoArgsConstructor
public class RegisterDTO {

    private String name;
    private String email;
    private String phone;
    private String password;
    private Date dob;
    private String gender;

}
