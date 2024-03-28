import React, { useEffect, useState } from 'react'; 
import { Link, useParams } from 'react-router-dom';
import '../assets/css/Application.css';
import axios from 'axios';
import AdminSidebar from '../components/AdminSidebar';

const GetApplication = () => { 
  const [applicationlist, setapplicationlists] = useState([]); 
  const { id } = useParams();
  const [status, setStatus] = useState('');
  

  useEffect(() => { 
    getAllapplicationlist(); 
  }, []);

  const deleteapplicationlist = async (id) => {
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
  
      await axios.delete(`http://localhost:8080/application/deleteJobapplication?id=${id}`, config);
      
      // Filter out the deleted application from the application list
      setapplicationlists(applicationlist.filter(application => application.id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const getAllapplicationlist = async () => { 
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
      const response = await axios.get('http://localhost:8080/application/getJobapplication', config);
      setapplicationlists(response.data);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  return ( 
    <div className="userdetailsfull">
      <AdminSidebar/><br/><br/><br/>
      
      <br/>
      <br/>
      <div className='applicationhead'>
        <h2>Applications</h2>
        </div>
      <table id='gettable'> 
        <thead>
          <tr> 
            <th>Application ID</th> 
            <th>Name</th> 
            <th>Email</th> 
            <th>Contact Number</th> 
            <th>Job Title</th> 
            <th>Status</th>
            <th>Actions</th> 
          </tr> 
        </thead>
        <tbody>
          {applicationlist.map((application) => (
            <tr key={application.id}> 
              <td>{application.id}</td> 
              <td>{application.fullname}</td> 
              <td>{application.email}</td> 
              <td>{application.phonenumber}</td> 
              <td>{application.jobtittle}</td>
              <td>
                <select id="application" name="application" value={status}  onChange={(e) => setStatus(e.target.value)} required>
                  <option value="pending">Pending</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td> 
              <td>
                <button className="delete" onClick={() => deleteapplicationlist(application.id)}> Delete!</button> &nbsp;&nbsp;
              </td> 
            </tr> 
          ))}
        </tbody>
      </table> 
    </div> 
  );
};

export default GetApplication; 
