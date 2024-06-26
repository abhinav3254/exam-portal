package com.abhinav3254.exam_portal.service;

import com.abhinav3254.exam_portal.dto.LoginDTO;
import com.abhinav3254.exam_portal.dto.RegisterDTO;
import com.abhinav3254.exam_portal.dto.ResponseDTO;
import com.abhinav3254.exam_portal.exception.CustomException;
import com.abhinav3254.exam_portal.model.User;
import com.abhinav3254.exam_portal.repository.RoleRepository;
import com.abhinav3254.exam_portal.repository.UserRepository;
import com.abhinav3254.exam_portal.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public ResponseDTO registerUser(RegisterDTO registerDTO) {
        Optional<User> userOptional = userRepository.findByEmail(registerDTO.getEmail());
        if (userOptional.isPresent()) {
            throw new CustomException("The email address is already registered. Please use a different email address.", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setRole(roleRepository.findByName("USER"));
        user.setName(registerDTO.getName());
        user.setEmail(registerDTO.getEmail());
        user.setPhone(registerDTO.getPhone());
        user.setGender(registerDTO.getGender());
        user.setDob(registerDTO.getDob());
        user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));

        userRepository.save(user);

        return new ResponseDTO("Registration successful. Welcome, " + user.getName() + "!");
    }

    public ResponseDTO loginUser(LoginDTO loginDTO, HttpServletResponse response) {
        Optional<User> userOptional = userRepository.findByEmail(loginDTO.getEmail());
        if (userOptional.isEmpty()) {
            throw new CustomException("No account found with the provided email address.", HttpStatus.NOT_FOUND);
        }

        User user = userOptional.get();

        if (passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            String token = jwtUtils.generateToken(user.getEmail(),user.getId(), user.getRole().getName());

//            return new ResponseDTO("Login successful. Welcome back, " + user.getName() + "!");
            return new ResponseDTO(token);
        }

        throw new CustomException("The password you entered is incorrect. Please try again.", HttpStatus.BAD_REQUEST);
    }
}
