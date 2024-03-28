package com.example.jobportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobportal.entity.Jobapplication;
import com.example.jobportal.service.JobapplicationService;
@RequestMapping("/application")
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class JobapplicationController 
{
    @Autowired
    private JobapplicationService jobapplicationservice;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getJobapplication")
    public List<Jobapplication>getJobapplicationDetails()
    {
        return jobapplicationservice.getJobapplication();
    }
    @GetMapping("/getById")
    public Jobapplication getByIdjobDetails(@RequestParam int id)
    {
        return jobapplicationservice.getByIdapplication(id)
        .orElseThrow(() -> new RuntimeException("Job Application not found"));
    }
    @PostMapping("/postJobapplication")
    public String saveJobDetails(@RequestBody Jobapplication jobapplication)
    {
        jobapplicationservice.saveJobapplication(jobapplication);
        return("Job Successfully saved");
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/putJobapplication")
    public String updateJobDetails(@RequestBody Jobapplication jobapplication,@RequestParam int id)
    {
        jobapplication.setId(id);
        jobapplicationservice.saveJobapplication(jobapplication);
        return("Sucessfully Updated");
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteJobapplication")
    public String deleteJobapplicationDetails(@RequestParam int id)
    {
        jobapplicationservice.deleteJobapplication(id);
        return("Sucessfully Deleted");
    }
}
