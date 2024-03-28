import React from 'react'
import SoftwareEngineer from '../assets/images/data-scientist.jpg'
import '../assets/css/Details.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiEnglishInput } from "react-icons/ri";
import { SiRedhatopenshift } from "react-icons/si";
import { MdIndeterminateCheckBox } from "react-icons/md";
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Details() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate("/login");
    } else {
      navigate("/form");
    }
  };
  return (
    <div>
       <UserHeader/><br/><br/><br/><br/><br/><br/>
      <div className='des_full'>
      <div className='job_des'>
        <div className='job_head'>
        <img src={SoftwareEngineer}/>
         <h2>Data Scientist</h2>
         </div>
        <div className='job_location'>
          <FaLocationDot />
          <p>Kolkata, Mumbai, New Delhi, Hyderabad, Pune, Chennai, Bengaluru</p>
         </div>
         <br/>
        <div className='job_salary'>
        <FaMoneyCheckAlt />
          <p>₹40,000 - ₹140,000 monthly</p>
          Gender : All | Age Limit - 18-26 | Openings - 30 | Experience - 0-1 Year
         </div>
         <div className='job_apply'>
            <button onClick={handleSubmit}>Apply for Job</button>
         </div>
      </div>
      <div className='job-con1'>
           <div className='job_high'>
               <h3>Job Highlights</h3><br/>
               <FaPeopleGroup />
               <p>13 Applicants</p>
           </div>
      <div className='jd'>
        <h3>Job Describtion</h3>
        <p>* One of:</p>
        <p>B.S. in Computer Science with 4-5 years of experience</p>
        <p>M.S. in Computer Science (or related field) with 1-3 years of experience</p>
        <p>PhD in Computer Science (or related field) with 0-2 years of experience</p>
         <p> Proficient with Java</p>
         <p>Proficient with SQL</p>
         <p>Proficient with databases and data stores especially MongoDB and ElasticSearch</p>
         <p>Experience with Deep Learning, Recommendation Models, Collaborative Filtering</p>
      </div>
      <div className='job_skill'>
        <h3>Key Skills</h3>
        <div className='but_skill'>
            <button>deep learning</button>
            <button>TDD</button>
            <button>Deployement</button>
            <button>NLP</button>
            <button>test driven</button>
            <button>MongoDB</button>
            <button>SQL</button>
            <button>Python</button>
        </div>
     
      <div className='job_req'>
        <h3>Job Requirements</h3>
        <div className='req_con'>
            <FaToolbox />
            <p>Experience</p><br/>
            <p><span>Min 1 Years</span></p>
        </div>
        <div className='req_con'>
        <RiGraduationCapFill />
            <p>Education</p><br/>
            <p><span>Graduate</span></p>
        </div>
        <div className='req_con'>
        <RiEnglishInput />
            <p>English Level</p><br/>
            <p><span>Good(Intermediate / Advanced) English</span></p>
        </div>
      </div>
      <div className='job_req'>
        <h3>Job Role</h3>
        <div className='req_con'>
        <RiGraduationCapFill />
            <p>Employeement Type</p><br/>
            <p><span>Full Time</span></p>
        </div>
        <div className='req_con'>
        <MdIndeterminateCheckBox />
            <p>Department</p><br/>
            <p><span>Data Science & Analytics</span></p>
        </div>
        <div className='req_con'>
        <SiRedhatopenshift />
            <p>Shift</p><br/>
            <p><span>Day Shift</span></p>
        </div>
      </div>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Details
