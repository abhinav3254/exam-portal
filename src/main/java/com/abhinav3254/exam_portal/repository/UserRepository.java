package com.abhinav3254.exam_portal.repository;

import com.abhinav3254.exam_portal.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);
}
