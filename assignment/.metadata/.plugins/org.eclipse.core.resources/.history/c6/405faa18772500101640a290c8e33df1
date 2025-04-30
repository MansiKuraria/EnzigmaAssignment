package com.cdac.enzigma.assignment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {
    "com.cdac.enzigma.assignment.controller",  // Update with correct package
    "com.cdac.enzigma.assignment.service",      // Update with correct package
    "com.cdac.enzigma.assignment.repository"    // Update with correct package
})
@EntityScan(basePackages = {"com.cdac.enzigma.assignment.model"})  // Update with correct package
@EnableJpaRepositories(basePackages = {"com.cdac.enzigma.assignment.repository"})  // Update with correct package
public class AssignmentApplication {

    public static void main(String[] args) {
        SpringApplication.run(AssignmentApplication.class, args);
    }
}
