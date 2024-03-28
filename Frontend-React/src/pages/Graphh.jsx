import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graphh = () => {
  // Updated sample data representing job roles over time
  const data = [
    { month: 'Jan', 'Software Engineer': 100, 'Web Developer': 150, 'App Developer': 80, 'Data Analytics': 200 },
    { month: 'Feb', 'Software Engineer': 120, 'Web Developer': 130, 'App Developer': 90, 'Data Analytics': 180 },
    { month: 'Mar', 'Software Engineer': 110, 'Web Developer': 140, 'App Developer': 85, 'Data Analytics': 190 },
    { month: 'Apr', 'Software Engineer': 130, 'Web Developer': 160, 'App Developer': 95, 'Data Analytics': 210 },
  ];

  return (
    <div>
      <div className='graph-container'>
        <div style={{ width: '60%', margin: 'auto', background: 'whitesmoke' }}>
          <h2>Job Applications of Each Role Over Time</h2>
          <ResponsiveContainer width="100%" height={400}>
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
  );
};

export default Graphh;
