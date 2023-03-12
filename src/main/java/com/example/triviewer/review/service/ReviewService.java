package com.example.triviewer.review.service;

import com.example.triviewer.review.repository.ReviewRepository;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }
}
