package com.example.jobportal.entity;

import com.example.jobportal.enumerate.Gender;
import com.example.jobportal.enumerate.Graduateyear;
import com.example.jobportal.enumerate.Jobtittle;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Jobapplication 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String fullname;
    private String email;
    private String phonenumber;
    @Enumerated(EnumType.STRING)
    private Jobtittle  jobtittle;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String dateofbirth;
    private String address;
    private String city;
     @Enumerated(EnumType.STRING)
    private Graduateyear graduateyear;
    private double sslc;
    private double hsc;
    private double cgpa;
    private String resume;
    private String drivelink;



}
