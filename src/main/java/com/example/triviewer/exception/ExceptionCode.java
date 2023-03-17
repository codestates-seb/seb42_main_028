package com.example.triviewer.exception;

import lombok.Getter;

public enum ExceptionCode {
    REVIEW_NOT_FOUND(404, "Order not found"),
    MEMBER_NOT_FOUND(404, "Member not found");



    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
