package com.abhinav3254.exam_portal.utils;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;


@Data
@AllArgsConstructor @NoArgsConstructor
public class JsonStructure <T>{

    T message;

}
