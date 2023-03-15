package com.example.triviewer.exception;

import lombok.Getter;

public class BusinessLogicException extends RuntimeException {
    @Getter
    ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}