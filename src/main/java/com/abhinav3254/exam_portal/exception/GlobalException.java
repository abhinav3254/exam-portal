package com.abhinav3254.exam_portal.exception;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> handleCustomException(CustomException e) {
        ErrorResponse errorResponse = new ErrorResponse(e.getMessage());
        return ResponseEntity.status(e.getHttpStatus()).body(errorResponse);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception e) {
        ErrorResponse errorResponse = new ErrorResponse(e.getMessage());
        return ResponseEntity.status(500).body(errorResponse);
    }

}
