import React, { useState, useEffect } from 'react';
import '../assets/css/Home.css'; // Import your CSS file for styling
import home_3 from '../assets/images/Untitled.jpeg'
import girl_2 from '../assets/images/girl_2.jpg'
import girl_3 from '../assets/images/girl_3.jpg'
import web_developer from '../assets/images/web_developer.png';
import UI from '../assets/images/UI (1).png';
import PM from '../assets/images/PM.png';
import app from '../assets/images/app.png';
import DM from '../assets/images/DM (2).png';
import UX from '../assets/images/ux-logo.png';
import UserHeader from '../components/UserHeader'; 
import home_1 from '../assets/images/home_1.jpeg';
import Accenture from '../assets/images/Accenture (1).png';
import { Link } from 'react-router-dom';
import Amazon from '../assets/images/amazon.png';
import Google from '../assets/images/googlee.png';
import microsoft from '../assets/images/microsoft.png';
import Infosys from '../assets/images/infosys.png';
import Footer from '../components/Footer.jsx'
function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'https://sovanta.com/wp-content/uploads/2021/12/frau-am-laptop-von-vorne-arbeitet_kaffeetasse_web_stock_16-9-1400x788.jpg',
            title: 'Find a Job With Your Interests and Abilities',
            content: 'Welcome to our online job application portal, where opportunities await! With our user-friendly platform, you can explore a wide range of job listings, connect with top employers, and take the next step towards your career goals.',
        },
        {
            image: girl_2,
            title: 'Find a Job With Your Interests and Abilities',
            content: 'Welcome to our online job application portal, where opportunities await! With our user-friendly platform, you can explore a wide range of job listings, connect with top employers, and take the next step towards your career goals.',
        },
        {
            image: girl_3,
            title: 'Find a Job With Your Interests and Abilities',
            content: 'Welcome to our online job application portal, where opportunities await! With our user-friendly platform, you can explore a wide range of job listings, connect with top employers, and take the next step towards your career goals.',
        },
        {
            image: home_3,
            title: 'Find a Job With Your Interests and Abilities',
            content: 'Welcome to our online job application portal, where opportunities await! With our user-friendly platform, you can explore a wide range of job listings, connect with top employers, and take the next step towards your career goals.',
        },
        // Add more slides as needed
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds (5000 milliseconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
               
            <UserHeader />
            <div className="slider-container">
            {slides.map((slide, index) => (
    <div
        key={index}
        className={`slide ${index === currentSlide ? 'active' : ''}`}
        style={{ backgroundImage: `url(${slide.image})` }}
    >
        <div className="content">
            <h5>{slide.title}</h5>
            <p>{slide.content}</p>
            <button>Get Started</button>
        </div>
    </div>
))}

                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
            <div className='jobDes'>
                <div className='tittle'>
                    <h5>2000+ Dream Job Openings</h5>
                    <p>Explore thousands of job opportunies and find your dream job with our comprehensive job search platform</p>
                </div>
            <div className='jobdetails'>
                <div className='jobcon1'>
                    <div className='conbox'>
                        <div className='image_con'>
                            <img src={web_developer} height="100px" width="100px"/>
                            <h4>Website Developer</h4>
                            <p>Remote work $4,000-$12,000</p>
                            <br/>
                            <p>we are seeking a talented web developer to join our team to create an engaging and effective company profile landing page.</p>
                            <div className='but_con'>
                                <button>ReactJS</button>
                                <button>Javascript</button>
                                <button>Web Developer</button>
                            </div>
                        </div>
                    </div>
                    <div className='conbox'>
                        <div className='image_con'>
                            <img src={UI} height="100px" width="100px"/>
                            <h4>Senior UI Designer</h4>
                            <p>Remote work $4,000-$12,000</p>
                            <br/>
                            <p>we are looking for a talented and experienced UI-User Interface Designer to develop a new social crawdfunging .</p>
                            <div className='but_con'>
                                <button>UI Designer</button>
                                <button>Adabe XD</button>
                                <button>UI UX Designer</button>
                            </div>
                        </div>
                    </div>
                    <div className='conbox'>
                        <div className='image_con'>
                            <img src={UX} height="100px" width="160px" style={{ marginLeft: '-35px' }}/>
                            <h4>UX Copywriter</h4>
                            <p>Remote work $4,000-$12,000</p>
                            <br/>
                            <p>we are seeking a talented UX Copywriter to join our team to create an engaging and effective food delivery product  .</p>
                           
                            <div className='but_con'>
                                <button>Copywriter</button>
                                <button>Content Writer</button>
                                <button>UX Copy</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='jobcon2'>
                <div className='conbox'>
                        <div className='image_con'>
                            <img src={PM} height="100px" width="100px"/>
                            <h4>Senior Project Manager</h4>
                            <p>Remote work $4,000-$12,000</p>
                            <br/>
                            <p>we are looking for a experienced Project Manger to join our team to take care all of incoming inquires from many clients.</p>
                            <div className='but_con'>
                                <button>Project Manger</button>
                                <button>Scrum Master</button>
                                <button>PM</button>
                            </div>
                        </div>
                    </div>
                    <div className='conbox'>
                        <div className='image_con'>
                            <img src={app} height="100px" width="100px"/>
                            <h4>App Developer</h4>
                            <p>Remote work $4,000-$12,000</p>
                            <br/>
                            <p>we are seeking a talented App developer to join our team to create an engaging and effective company Related App.</p>
                            <div className='but_con'>
                                <button>ReactJS</button>
                                <button>Javascript</button>
                                <button>CSS</button>
                            </div>
                        </div>
                    </div>
                    <div className='conbox'>
                        <div className='image_con'>
                        <img src={DM} height="100px" width="160px" style={{ marginLeft: '-25px' }} />

                            <h4>Digital Marketing</h4>
                            <p>Remote work $4,000-$12,000</p>
                            <br/>
                            <p>we are seeking a talented Digital Marketing to boost our market and our value around social media, website,and other digital plateform.</p>
                            <div className='but_con'>
                                <button>ReactJS</button>
                                <button>Javascript</button>
                                <button>Web Developer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='rectcon'>
                <div className='rect_img'>
                    <img src='https://rey.design/wp-content/uploads/2023/06/Price-changes-effective-june-1st.jpg' width='1270px' height='500px'/>
                <div className='rect_con'>
                    <h1>Get Your Mathched Jobs in a Few Minutes</h1>
                    <p>Discover your ideal career opportunity by exploring job openings offered by top global companies.Upload your CV now.</p>
                    <button>Upload your CV</button>
                </div>
                </div>
            </div>
            <div className='topcom'>
                <h3>Top Companies</h3>
                <div className='company_container'>
                    <div className='company_box'>
                        <div className='company_img'>
                            <img src={Accenture} width="80px" height="80px"/>
                            <h2>Accenture</h2>
                            <p><Link to='/'>200 Jobs</Link></p>
                        </div>
                    </div>
                    <div className='company_box'>
                        <div className='company_img'>
                            <img src={Amazon} width="80px" height="80px"/>
                            <h2>&nbsp;&nbsp;Amazon</h2>
                            <p><Link to='/'>420 Jobs</Link></p>
                        </div>
                    </div>
                    <div className='company_box'>
                        <div className='company_img'>
                            <img src={Google} width="80px" height="80px"/>
                            <h2>&nbsp;&nbsp;&nbsp;&nbsp;Google</h2>
                            <p><Link to='/'>&nbsp;&nbsp;180 Jobs</Link></p>
                        </div>
                    </div>
                    <div className='company_box'>
                        <div className='company_img'>
                            <img src={Infosys} width="80px" height="80px"/>
                            <h2>&nbsp;&nbsp;&nbsp;Infosys</h2>
                            <p><Link to='/'>&nbsp;&nbsp;310 Jobs</Link></p>
                        </div>
                    </div>
                    <div className='company_box'>
                        <div className='company_img'>
                            <img src={microsoft} width="80px" height="80px"/>
                            <h2>&nbsp;&nbsp;Microsoft</h2>
                            <p><Link to='/'>&nbsp;&nbsp;200 Jobs</Link></p>
                        </div>
                    </div>
                 
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
