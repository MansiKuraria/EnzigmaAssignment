package com.cdac.enzigma.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cdac.enzigma.assignment.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
