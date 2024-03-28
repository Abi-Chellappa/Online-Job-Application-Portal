import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

import axios from 'axios';
 // Import useNavigate for navigation
import '../assets/css/JobDetails.css'
import AdminSidebar from '../components/AdminSidebar';


const JobDetails = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const {jobId} =useParams();
  
 
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

  const updateid = (jobId) => {
    navigate(`/editjob/${jobId}`);
}

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

    const deleteapplicationlist = async (jobId) => {
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
      
          await axios.delete(`http://localhost:8080/job/deleteJob?jobId=${jobId}`, config);
          
          // Filter out the deleted job from the jobs list
          setJobs(jobs.filter(job => job.jobId !== jobId));
        } catch (error) {
          console.error("Error deleting job:", error);
        }
      };

    return filteredJobs.map((job, index) => (
      <div key={index} className="job6">
        <img src={job.jobimage} alt={job.title} />
        <h3 className="job-title6">{job.title}</h3>
        <div className="details6"><span className='jobHeadings'>Company:</span> {job.company}</div>
        <div className="details6"><span className='jobHeadings'>Department:</span> {job.dept}</div>
        <div className="details6"><span className='jobHeadings'>Location:</span> {job.location}</div>
        <div className="details6"><span className='jobHeadings'>Responsibility:</span> {job.responsiblity}</div>
        <div className="details6"><span className='jobHeadings'>Qualification:</span> {job.qualification}</div>
        {/* Add more fields as needed */}
        <button className="details-btn6" onClick={()=>updateid(job.jobId)}>Edit</button>
        <button className="details-btndel6" onClick={() => deleteapplicationlist(job.jobId)}>Delete</button>
        
      </div>
    ));
  };

  return (
    <div><AdminSidebar/>
      <br/><br/>
      <div className="jobs-list-container6">
        <h2>{jobs.length} Jobs</h2>
        <input 
          className="job-search6" 
          type="text" 
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="jobs6">
          {createJobListingCards()}
        </div>
      </div>
   
    </div>
  );
};

export default JobDetails;
