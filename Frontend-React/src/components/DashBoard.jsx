import React from 'react'
import AdminSidebar from './AdminSidebar'
import { HiUserGroup } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import '../assets/css/DashBoard.css'
import { BsPersonWorkspace } from "react-icons/bs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import { MdIndeterminateCheckBox } from "react-icons/md";
function DashBoard() {
    const data = [
        { month: 'Jan', 'Software Engineer': 100, 'Web Developer': 150, 'App Developer': 80, 'Data Analytics': 200 },
        { month: 'Feb', 'Software Engineer': 120, 'Web Developer': 130, 'App Developer': 90, 'Data Analytics': 180 },
        { month: 'Mar', 'Software Engineer': 110, 'Web Developer': 140, 'App Developer': 85, 'Data Analytics': 190 },
        { month: 'Apr', 'Software Engineer': 130, 'Web Developer': 160, 'App Developer': 95, 'Data Analytics': 210 },
      ];
  return (
    <div>
      <AdminSidebar/>
      <div className='dashboardfull'>
            <div className='dashboardhead'>
                <h1>Admin Dashboard</h1>
            </div>
            <div className='dash_con'>
                <div className='dash_det'>
                    <h5><span className='l1'>TOTAL CLIENT</span></h5>
                    <HiUserGroup />
                    <p> Clients</p>
                </div>
                <div className='dash_det'>
                <h5><span className='l2'>TOTAL USER LOGIN</span></h5>
                <FaUserAlt />
                    <p>6 Users</p>
                </div>
                <div className='dash_det'>
                    <h5><span className='l3'>TOTAL COMPANY</span></h5>
                    <MdIndeterminateCheckBox />
                    <p>4 Companies</p>
                </div>
                <div className='dash_det'>
                     <h5><span className='l4'>TOTAL JOBS</span></h5>
                     <BsPersonWorkspace />
                     <p>7 Job</p>
                </div>
            </div>
            <div className='dash_con2'>
                <div className='dash_det2'>
                    <h5><span className='l1'>TOTAL APPLY JOBS</span></h5>
                    <HiUserGroup />
                    <p>2 Users</p>
                </div>
                <div className='dash_det2'>
                    <h5><span className='l2'>TOTAL JOBS ACCEPT</span></h5>
                    <HiUserGroup />
                    <p>2 Users</p>
                </div>
                <div className='dash_det2'>
                    <h5><span className='l3'>TOTAL JOBS REJECT</span></h5>
                    <HiUserGroup />
                    <p>2 Users</p>
                </div>
               
                
                
                
            </div>
           
            <div className='graph-container'>
        <div style={{ width: '80%', marginTop: '50px', marginLeft:'80PX', background: 'whitesmoke' }}>
         
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Software Engineer" stroke="#8884d8" />
              <Line type="monotone" dataKey="Web Developer" stroke="#82ca9d" />
              <Line type="monotone" dataKey="App Developer" stroke="#ffc658" />
              <Line type="monotone" dataKey="Data Analytics" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
      </div>
      </div>
  
  )
}

export default DashBoard
