package com.abhinav3254.exam_portal.controller;


import com.abhinav3254.exam_portal.dto.LoginDTO;
import com.abhinav3254.exam_portal.dto.RegisterDTO;
import com.abhinav3254.exam_portal.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;


@RequestMapping("auth")
@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody(required = true) RegisterDTO registerDTO) {
        return ResponseEntity.status(201).body(authService.registerUser(registerDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody(required = true) LoginDTO loginDTO, HttpServletResponse response) {
        return ResponseEntity.status(200).body(authService.loginUser(loginDTO,response));
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok("testing-server");
    }

}
