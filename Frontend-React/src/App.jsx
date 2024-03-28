// App.js

import React from 'react';
import './App.css';
import { Routes, Route, Form } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import UserHeader from './components/UserHeader';
import Footer from './components/Footer';
import Job from './pages/users/Job';
import Details from './pages/Details';
import JobApplication from './pages/JobApplication';
import About from './pages/About';
import AdminSidebar from './components/AdminSidebar';
import UserDetails from './components/UserDetails';
import DashBoard from './components/DashBoard';
import Success from './pages/Sucess';
import ProfileList from './pages/ProfileList';
import JobPostForm from './pages/JobPostForm';
import Application from './pages/Application';
import Graphh from './pages/Graphh';
import Editprofile from './pages/Editprofile';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import GetApplication from './pages/GetApplication';
import JobDetails from './pages/JobDetails';
import EditJob from './pages/EditJob';



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>}/>
          <Route path='/userHeader' element={<UserHeader/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/job' element={<Job/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/form' element={<JobApplication/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/admin' element={<AdminSidebar/>}/>
          <Route path='/userdetails' element={<UserDetails/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
           <Route path='/sucess' element={<Success/>}/>
           <Route path='/profile' element={<ProfileList/>}/>
           <Route path='/jobpost' element={<JobPostForm/>}/>
           <Route path='/application' element={<Application/>}/> 
           <Route path='/graph' element={<Graphh/>}/>
           <Route path='/editprofile' element={<Editprofile/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/payment' element={<Payment/>}/>
           <Route path='/getapplication' element={<GetApplication/>}/>
           <Route path='/jobdetails' element={<JobDetails/>}/>
           <Route path='/editjob/:jobId' element={<EditJob/>}/>
      </Routes>
    </>
  );
}

export default App;
