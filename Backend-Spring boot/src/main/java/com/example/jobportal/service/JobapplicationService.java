package com.example.jobportal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.jobportal.entity.Jobapplication;
import com.example.jobportal.repository.JobapplicationRepository;

@Service
public class JobapplicationService {
    @Autowired
    private JobapplicationRepository jobapplicationrepo;
    
    public void saveJobapplication(Jobapplication jobapplication)
    {
        jobapplicationrepo.save(jobapplication);
    }
    public List<Jobapplication> getJobapplication()
    {
        return jobapplicationrepo.findAll();
    }
    public void updateJobapplication(Jobapplication jobapplication)
    {
         jobapplicationrepo.save(jobapplication);
    }
    public void deleteJobapplication(int id)
    {
        jobapplicationrepo.deleteById(id);
    }
    public Optional<Jobapplication> getByIdapplication(int id) {
        return jobapplicationrepo.findById(id);
    }
}
