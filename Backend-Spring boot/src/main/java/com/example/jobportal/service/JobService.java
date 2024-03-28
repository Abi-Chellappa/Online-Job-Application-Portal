package com.example.jobportal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jobportal.entity.Job;
import com.example.jobportal.repository.JobRepository;

@Service
public class JobService 
{
     @Autowired
    private JobRepository jobrepo;
    
    public void saveJob(Job job)
    {
        jobrepo.save(job);
    }
    public List<Job> getJob()
    {
        return jobrepo.findAll();
    }
    public void updateJob(Job job)
    {
         jobrepo.save(job);
    }
    public void deleteJob(int jobId)
    {
        jobrepo.deleteById(jobId);
    }
    public Optional<Job>getiddata(int jobId) 
	{
		
		return jobrepo.findById(jobId);
	}
}
