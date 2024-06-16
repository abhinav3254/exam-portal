package com.abhinav3254.exam_portal.controller;

import com.abhinav3254.exam_portal.dto.LoginDTO;
import com.abhinav3254.exam_portal.dto.RegisterDTO;
import com.abhinav3254.exam_portal.dto.ResponseDTO;
import com.abhinav3254.exam_portal.service.AuthService;
import com.abhinav3254.exam_portal.utils.JsonStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;


@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> registerUser(@RequestBody(required = true) RegisterDTO registerDTO) {
        ResponseDTO response = authService.registerUser(registerDTO);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> loginUser(@RequestBody(required = true) LoginDTO loginDTO, HttpServletResponse response) {
        ResponseDTO loginResponse = authService.loginUser(loginDTO, response);
        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.status(200).body(new JsonStructure<String>("testing-server"));
    }
}
