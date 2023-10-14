import React from 'react';
import '../GHome.css';
import { Link } from 'react-router-dom';
import Stopwatch from './Stopwatch'; 

const GHome = () => {
  return (
    <div className='GHome-room'>
      <Stopwatch />
      <p>!!!...אין אפשרות לברוח<br/>!!!חחח... עבדנו עליכם</p>
    </div>
  );
}

export default GHome;
