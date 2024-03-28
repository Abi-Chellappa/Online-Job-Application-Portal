import React from 'react'
import '../assets/css/Contact.css';
import * as Fa6Icons from "react-icons/fa6";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import UserHeader from '../components/UserHeader';
import axios from 'axios';
export default function Contact() {

    const[username,setUsername]=useState('');
    const[email,setEmail]=useState(''); 
    const[phoneno,setPhoneno]=useState('');
    const[message,setMessage]=useState('');
    const navigate=useNavigate();
    const store={username,email,phoneno,message};

    const formHolder =async(e) =>{
        e.preventDefault();
    
    if(username.length==0 || email.length==0 || phoneno.length===0 || message.length==0)
    {
      alert("Enter all the field");
    }
    else
    {
      try 
      {
        const token = localStorage.getItem("token");
        if (!token) 
        {
          throw new Error("No token found");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        await axios.post(`http://localhost:8080/contact/postContact`, store, config);
        navigate('/'); 
      }
      catch (error) 
      {
        console.error("Error posting job:", error);
      }
    }
    }
 
   
  return (
    <div>
       <UserHeader/>
        <section className='contactt0'>
          <div className='content0'>
            {/* <h1>Contact Us</h1>*/}
          </div>
          <div className='contactdetails'>
             <div className='contactInfo'>
                
                   <div className='contactbox'>
                     <div className='contacticon'><Fa6Icons.FaLocationDot/></div>
                     <div className='contacttext'>
                       <h3 className='h33'>Address</h3>
                       <p>4671 Sugar camp Road,<br/>Qwatonna,Midfghjk,<br/>456789</p>
                     </div>
                   </div>
                   
                    <div className='contactbox'>
                     <div className='contacticon'><BsIcons.BsFillTelephoneFill/></div>
                     <div className='contacttext'>
                       <h3>Phone</h3>
                       <p>507-475-6094</p>
                     </div>
                   </div>
                    
                   <div className='contactbox'>
                     <div className='contacticon'><AiIcons.AiOutlineMail/></div>
                     <div className='contacttext'>
                       <h3>Email</h3>
                       <p>abcd23@gmail.com</p>
                     </div>
                   </div>
                </div> 
                </div> 
                   <div className='contactform'>
                       <form onSubmit={formHolder}>
                          <h2>Send Message</h2>
                          <div className='inputbox'>
                             <input type="text" name="" value={username} onChange={(e)=>setUsername(e.target.value)} required="required"/>
                             <span>Full Name</span>
                          </div>
                          <div className='inputbox'>
                             <input type="text" name="" value={email} onChange={(e)=>setEmail(e.target.value)} required="required"/>
                             <span>Email</span>
                          </div>
                          <div className='inputbox'>
                             <input type="text" name="" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} required="required"/>
                             <span>Phone No</span>
                          </div>
                          <div className='inputbox'>
                             <textarea type="text" name="" value={message} onChange={(e)=>setMessage(e.target.value)} required="required"/>
                             <span>Type your Message....</span>
                          </div>
                          <div className='inputbox'>
                           <input type="submit" name="" value="Send"/>
                          </div>

                      
                        </form>
                   </div>
               
              
              </section>
             
              <Footer/>
              </div>
  )
}