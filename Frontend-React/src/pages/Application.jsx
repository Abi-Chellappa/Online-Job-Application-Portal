import React, { useState } from 'react';
import '../assets/css/Application.css';
import AdminSidebar from '../components/AdminSidebar';

export default function Jobpost() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "APP Developer",
      company: "Microsoft",
      salary: "$70,000",
      shift: "Day",
      education: "Master's Degree"
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Zoho",
      salary: "$60,000",
      shift: "Day",
      education: "Bachelor's Degree"
    },
    {
      id: 3,
      title: "SAP Consultant",
      company: "TCS",
      salary: "$50,000",
      shift: "Night",
      education: "Master's Degree"
    },
    {
      id: 4,
      title: "SAP Consultant",
      company: "TCS",
      salary: "$50,000",
      shift: "Night",
      education: "Master's Degree"
    },
    {
        id: 5,
        title: "APP Developer",
        company: "Accenture",
        salary: "$70,000",
        shift: "Day",
        education: "Master's Degree"
      }
  ]);

  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handlePost = () => {
    console.log('Post button clicked');
  };

  return (
    <div>
      <AdminSidebar />
      <div className='card_container'>
      <div className='jobpost'>
        <h2>Job Details</h2>
      </div>
      {jobs.map(job => (
        <div className='card' key={job.id}>
          <div className='card-content'>
            <h2>{job.company}</h2>
            <h3>{job.title}</h3>
            <div className="job-info">
              <div className='field'><strong>Job Role:</strong> {job.title}</div>
              <div className='field'><strong>Company:</strong> {job.company}</div>
              <div className='field'><strong>Salary:</strong> {job.salary}</div>
              <div className='field'><strong>Shift:</strong> {job.shift}</div>
              <div className='field'><strong>Education:</strong> {job.education}</div>
            </div>
            <div className="buttons">
              <button onClick={() => handleDelete(job.id)} className="deleteButton">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
