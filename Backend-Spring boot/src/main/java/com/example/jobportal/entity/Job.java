package com.example.jobportal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Job 
{ 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int jobId;
    String title;
    String company;
    String dept;
    String location;
    String responsiblity;
    String qualification;
    String jobimage;

}
