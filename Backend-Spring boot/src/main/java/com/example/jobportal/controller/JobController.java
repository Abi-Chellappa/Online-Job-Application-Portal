package com.example.jobportal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobportal.entity.Job;
import com.example.jobportal.service.JobService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/job")
public class JobController 
{
    @Autowired
    private JobService jobservice;
    @GetMapping("/getJob")
    public List<Job>getJobDetails()
    {
        return jobservice.getJob();
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/postJob")
    public String saveJobDetails(@RequestBody Job job)
    {
        jobservice.saveJob(job);
        return("Job Successfully saved");
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/putJob")
    public String updateJobDetails(@RequestBody Job job,@RequestParam int jobId)
    {
        job.setJobId(jobId);
        jobservice.saveJob(job);
        return("Sucessfully Updated");
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteJob")
    public String deleteJobDetails(@RequestParam int jobId)
    {
        jobservice.deleteJob(jobId);
        return("Sucessfully Deleted");
    }

    @GetMapping("/getbyid")
	public Optional<Job> getiddetails(@RequestParam int jobId)
	{
		return jobservice.getiddata(jobId);
	}
}
