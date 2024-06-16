package com.abhinav3254.exam_portal.controller;


import com.abhinav3254.exam_portal.dto.UpdateProfileDTO;
import com.abhinav3254.exam_portal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile() {
        return ResponseEntity.ok(userService.getProfile());
    }

    @PutMapping("/profile/update")
    public ResponseEntity<?> updateProfile(@ModelAttribute UpdateProfileDTO updateProfileDTO) {
        return ResponseEntity.ok(userService.updateProfile(updateProfileDTO));
    }

}
