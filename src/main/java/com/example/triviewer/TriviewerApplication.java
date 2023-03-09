package com.example.triviewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class TriviewerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TriviewerApplication.class, args);
	}

}
