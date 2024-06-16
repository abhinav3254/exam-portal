package com.abhinav3254.exam_portal.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
@AllArgsConstructor @NoArgsConstructor
public class ProfileDTO {

    private String name;
    private String email;
    private String phone;
    private String gender;
    private Date dob;
    private String profileImage;
    private String role;

}
