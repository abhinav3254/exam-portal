package com.abhinav3254.exam_portal.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name",columnDefinition = "VARCHAR(55")
    private String name;

}
