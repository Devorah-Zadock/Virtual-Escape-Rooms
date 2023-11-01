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
      <img src={GazaMap} alt='' id="GazaMap"/>
      
      
      {/* <Link to="/Egypt" className="GbuttonStyle">יציאה דרך ישראל</Link>
      <Link to="/Egypt" className="GbuttonStyle">יציאה דרך מצרים</Link>
      <Link to="/Egypt" className="GbuttonStyle">בריחה בהפלגה</Link> */}
    </div>
  );
}

export default GHome;
