package com.abhinav3254.exam_portal.service;


import com.abhinav3254.exam_portal.dto.ProfileDTO;
import com.abhinav3254.exam_portal.dto.ResponseDTO;
import com.abhinav3254.exam_portal.dto.UpdateProfileDTO;
import com.abhinav3254.exam_portal.exception.CustomException;
import com.abhinav3254.exam_portal.model.User;
import com.abhinav3254.exam_portal.repository.UserRepository;
import com.abhinav3254.exam_portal.security.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Base64;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtFilter jwtFilter;

    public ProfileDTO getProfile() {
        Integer id = jwtFilter.getUserId();
        Optional<User> userOptional = userRepository.findById(id);

        if (userOptional.isEmpty()) throw new CustomException("User not found", HttpStatus.NOT_FOUND);
        User user = userOptional.get();

        ProfileDTO profileDTO = new ProfileDTO();
        profileDTO.setName(user.getName());
        profileDTO.setPhone(user.getPhone());
        profileDTO.setEmail(user.getEmail());
        profileDTO.setDob(user.getDob());
        profileDTO.setGender(user.getGender());
        if (!Objects.isNull(user.getProfileImage())) {
            profileDTO.setProfileImage(convertImage(user.getProfileImage()));
        }
        profileDTO.setRole(user.getRole().getName());

        return profileDTO;

    }

    private String convertImage(byte[] arr) {
        Base64.Encoder encoder = Base64.getEncoder();
        return encoder.encodeToString(arr);
    }

    public ResponseDTO updateProfile(UpdateProfileDTO updateProfileDTO) {
        Optional<User> userOptional = userRepository.findById(updateProfileDTO.getId());
        if (userOptional.isEmpty()) throw new CustomException("User not found", HttpStatus.NOT_FOUND);

        User user = userOptional.get();

        if (updateProfileDTO.getName() != null && !updateProfileDTO.getName().isBlank() && !updateProfileDTO.getName().equals(user.getName())) {
            user.setName(updateProfileDTO.getName());
        }

        if (updateProfileDTO.getPhone() != null && !updateProfileDTO.getPhone().isBlank() && !updateProfileDTO.getPhone().equals(user.getPhone())) {
            user.setPhone(updateProfileDTO.getPhone());
        }

        if (updateProfileDTO.getDob() != null && !updateProfileDTO.getDob().equals(user.getDob())) {
            user.setDob(updateProfileDTO.getDob());
        }

        if (updateProfileDTO.getGender() != null && !updateProfileDTO.getGender().isBlank() && !updateProfileDTO.getGender().equals(user.getGender())) {
            user.setGender(updateProfileDTO.getGender());
        }

        if (updateProfileDTO.getProfileImage() != null && !updateProfileDTO.getProfileImage().isEmpty()) {
            try {
                user.setProfileImage(updateProfileDTO.getProfileImage().getBytes());
            } catch (IOException e) {
                throw new CustomException("Error processing profile image", HttpStatus.BAD_REQUEST);
            }
        }

        userRepository.save(user);

        return new ResponseDTO("Profile updated successfully.");
    }
}
