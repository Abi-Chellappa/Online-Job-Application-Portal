import React, { useState, useEffect } from 'react';
import '../../assets/css/Job.css';
import UserHeader from '../../components/UserHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Footer from '../../components/Footer';

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    // Fetch job data from the backend when the component mounts
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const response = await axios.get('http://localhost:8080/job/getJob', config); // Adjust the URL and config as per your backend endpoint
        setJobs(response.data); // Update the jobs state with the fetched data
      } catch (error) {
        console.error("Error fetching job data:", error);
        // Handle error here, for example:
        // setError("Error fetching job data");
      }
    };

    fetchJobs();
  }, []);

  const createJobListingCards = () => {
    const filteredJobs = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredJobs.length === 0 && searchTerm.trim() !== '') {
      return (
        <div className="no-results">
          No results found for "{searchTerm}"
        </div>
      );
    }

    return filteredJobs.map((job, index) => (
      <div key={index} className="job">
        <img src={job.jobimage} alt={job.title} />
        <h3 className="job-title">{job.title}</h3>
        <div className="details"><span className='jobHeadings'>Company:</span> {job.company}</div>
        <div className="details"><span className='jobHeadings'>Department:</span> {job.dept}</div>
        <div className="details"><span className='jobHeadings'>Location:</span> {job.location}</div>
        <div className="details"><span className='jobHeadings'>Responsibility:</span> {job.responsiblity}</div>
        <div className="details"><span className='jobHeadings'>Qualification:</span> {job.qualification}</div>
        {/* Add more fields as needed */}
        <a href="/details" className="details-btn">More Details</a>
      </div>
    ));
  };

  return (
    <div>
      <UserHeader/><br/><br/><br/><br/><br/>
      <div className="jobs-list-container">
        <h2>{jobs.length} Jobs</h2>
        <input 
          className="job-search" 
          type="text" 
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="jobs">
          {createJobListingCards()}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Job;
