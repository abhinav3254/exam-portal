package com.abhinav3254.exam_portal.security;

import com.abhinav3254.exam_portal.model.User;
import com.abhinav3254.exam_portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;


@Component
public class CustomUserDetails implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    private User user;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        int userId = Integer.parseInt(username);
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            user = userOptional.get();
            return new org.springframework.security.core.userdetails.User(user.getId().toString(),user.getPassword(),new ArrayList<>());
        }
        throw new UsernameNotFoundException("User not found");
    }

    public User getUserDetails() {
        if (!Objects.isNull(user))
         return this.user;
        throw new UsernameNotFoundException("User not found");
    }

}
