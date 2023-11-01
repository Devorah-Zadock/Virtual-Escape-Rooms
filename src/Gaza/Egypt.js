import React from 'react';
import './GHome.css';
import { Link } from 'react-router-dom';
import Stopwatch from '../components/Stopwatch'; 

const Egypt = () => {
  return (
    <div className='GHome-room'>
      <Stopwatch />
      
      <p>לבריחה מכיוון הים</p>
    </div>
  );
}

export default Egypt;