import React from 'react'
import UserHeader from '../components/UserHeader'
import '../assets/css/About.css';
import home from '../assets/images/home_1.jpeg';
import Footer from '../components/Footer';
function About() {
  return (
    <div>
        <UserHeader/><br/><br/><br/><br/><br/><br/>
       <div className='about_full'>
           <div className='about_con1'>
                
              <div className='about_para'>
                <p>Our online job application portal is designed to revolutionize the way job seekers and employers connect. At its core, our platform serves as a bridge between talented individuals seeking meaningful employment opportunities
                    companies eager to discover top-tier talent.Join our community today and let us help you unlock your full potential in the ever-evolving world of work.</p>
                    <p>Join us on our mission to empower individuals to pursue fulfilling careers and companies to find the perfect talent to drive their success. 
                      Explore our online job application portal today and take the next step towards realizing your professional goals.</p>
                    
              </div>
              <div className='about_det'>
                  <img src="https://i.pinimg.com/564x/39/10/71/39107119719c9bfc049aa0589e619165.jpg" width='550px' height='350px'/>
              </div>
              
           </div>
           <div className='about_con2'>
                
              <div className='about_det2'>
                  <img src="https://i.pinimg.com/564x/53/7e/7f/537e7f26b6908911b2f67e93369f6e42.jpg" width='550px' height='350px'/>
              </div>
              <div className='about_para2'><br/>
                <p>Furthermore, we prioritize transparency and efficiency, ensuring that job seekers 
                    have access to all the necessary information and resources. Our portal features comprehensive job descriptions, and seamless communication channels to facilitate interaction between applicants and employers</p>
                    <p>With user-friendly interfaces and robust functionalities, our portal empowers job seekers to showcase their skills, experiences, and aspirations effectively. Through intuitive features such as comprehensive profile creation, resume uploads, and personalized job searches, candidates can navigate their career paths with confidence and precision.</p>
                    
              </div>
              
           </div>
       </div>
       <Footer/>
       </div>
   
  )
}

export default About
