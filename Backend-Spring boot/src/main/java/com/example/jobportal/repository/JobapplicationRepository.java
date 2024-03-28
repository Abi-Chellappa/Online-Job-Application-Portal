package com.example.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobportal.entity.Jobapplication;
@Repository
public interface JobapplicationRepository extends JpaRepository<Jobapplication,Integer> 
{
        
}
