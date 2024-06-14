package com.abhinav3254.exam_portal.exception;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
    private String message;
}
