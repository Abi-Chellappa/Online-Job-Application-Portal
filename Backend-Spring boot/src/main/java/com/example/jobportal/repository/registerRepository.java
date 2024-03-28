package com.example.jobportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobportal.entity.Registerentity;


@Repository
public interface registerRepository extends JpaRepository<Registerentity,Integer> 
{
     Optional<Registerentity>findByUsername(String username);
    
} 
