import React from 'react';
import './GHome.css';
import { Link } from 'react-router-dom';
import Stopwatch from '../components/Stopwatch';
import Missile from '../components/Missile';
import GazaMap from '../images/GazaMap3.png';

{/* <p>!!!!!לא ניתן לברוח<br/>
      !!!...חחח... עבדנו עליכם<br/><br/>
      ....עוד מעט הטיל נוחת עליכם... ספירה לאחור
      </p> */}

const GHome = () => {
  return (
    <div className='GHome-room'>
      <Stopwatch />
      <div id='GazaMap' className="GazaMap-container">
        <Link to="/Egypt" className="GbuttonStyle" id='Erez'>Check point Erez</Link>
        <Link to="/GazaPort" className="GbuttonStyle" id='GazaPort'>ميناء غزة البحري - الصيادين</Link>
        <Link to="/Egypt" className="GbuttonStyle" id='Rafiah'>رفيع</Link>
      </div>

    </div>
  );
}

export default GHome;
