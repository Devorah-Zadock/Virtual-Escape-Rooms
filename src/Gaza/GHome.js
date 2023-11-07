import React, { useState } from 'react';
import './GHome.css';
import { Link } from 'react-router-dom';
import Stopwatch from '../components/Stopwatch';
import Puzzle1 from '../images/puzzle1.png';
import Popup from './Popup';
import './Popup.css';

const GHome = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleAnswerCorrect = () => {
    setIsAnswerCorrect(true);
  };

  return (
    <div className='GHome-room'>
      <Stopwatch />
      <div id='GazaMap' className="GazaMap-container">
        <button className="GbuttonStyle" id='Erez'>Check point Erez</button>
        <button className="GbuttonStyle" id='GazaPort' onClick={isAnswerCorrect ? null : openPopup}>{isAnswerCorrect ? 'V' : 'ميناء غزة البحري - الصيادين'}</button>
        <Popup isOpen={isPopupOpen} onClose={closePopup} img={Puzzle1} input="5741" onAnswerCorrect={handleAnswerCorrect} />
        <button className="GbuttonStyle" id='Rafiah'>رفيع</button>
      </div>

    </div>
  );
}

export default GHome;
