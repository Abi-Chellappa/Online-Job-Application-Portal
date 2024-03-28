import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../assets/css/EditJob.css';

function EditJob() {
  const { jobId } = useParams();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [dept, setDept] = useState('');
  const [location, setLocation] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [qualification, setQualification] = useState('');
  const [jobImage, setJobImage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
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

        const response = await fetch(`http://localhost:8080/job/getbyid?jobId=${jobId}`, config);
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        setTitle(data.title);
        setCompany(data.company);
        setDept(data.dept);
        setLocation(data.location);
        setResponsibility(data.responsibility);
        setQualification(data.qualification);
        setJobImage(data.jobImage); // Corrected variable name
      } catch (error) {
        console.error("Error fetching job details:", error);
        setResponseMessage(error.message);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const handleDeptChange = (e) => {
    setDept(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleResponsibilityChange = (e) => {
    setResponsibility(e.target.value);
  };
  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };
  const handleJobImageChange = (e) => {
    setJobImage(e.target.value);
  };

  const saveOrUpdateJob = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const config = {
        method: 'PUT', // Corrected method
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          company,
          dept,
          location,
          responsibility,
          qualification,
          jobImage // Corrected variable name
        })
      };

      const response = await fetch(`http://localhost:8080/job/putJob?jobId=${jobId}`, config);
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }

      const data = await response.json();
      setResponseMessage(data.message);
      navigate("/jobdetails");
    } catch (error) {
      console.error("Error updating job:", error);
      setResponseMessage(error.message);
    }
  };

  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header92">
            <p id='update'>Update Job Details</p>
          </div>
          <div className='rectangle92'>
            <div className='form92'>
              <form onSubmit={saveOrUpdateJob}>
                <div className="inputtt">
                  <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
                </div>
                <div className="inputtt">
                  <input type="text" placeholder="Company" value={company} onChange={handleCompanyChange} />
                </div>
                <div className="inputtt">
                  <input type="text" placeholder="Department" value={dept} onChange={handleDeptChange} />
                </div>
                <div className="inputtt">
                  <input type="text" placeholder="Location" value={location} onChange={handleLocationChange} />
                </div>
                <div className="inputtt">
                  <input type="text" placeholder="Responsibility" value={responsibility} onChange={handleResponsibilityChange} />
                </div>
                <div className="inputtt">
                  <input type="text" placeholder="Qualification" value={qualification} onChange={handleQualificationChange} />
                </div>
                <div className="inputtt">
                  <input type="text" placeholder="Job Image" value={jobImage} onChange={handleJobImageChange} />
                </div>
                <br />
                {responseMessage && <div className="response-message">{responseMessage}</div>}
                <br />
                <button className='but92' type="submit">Update</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/jobdetails"><button className="ecancelbtn">Cancel</button></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditJob;
