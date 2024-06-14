package com.abhinav3254.exam_portal.repository;

import com.abhinav3254.exam_portal.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
    Role findByName(String name);
}
