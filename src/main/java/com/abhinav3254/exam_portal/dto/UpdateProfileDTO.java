package com.abhinav3254.exam_portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;


@Data
@AllArgsConstructor @NoArgsConstructor
public class UpdateProfileDTO {
    private Integer id;
    private String name;
    private String phone;
    private Date dob;
    private MultipartFile profileImage;
    private String gender;
}
