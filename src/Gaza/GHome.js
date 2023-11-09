import React, { useState, useEffect } from 'react';
import './GHome.css';
import Stopwatch from '../components/Stopwatch';
import GazaPortImg from '../images/puzzle1.png';
import Missile from '../images/missile.png';
import Popup from './Popup';
import './Popup.css';
import song from '../audio/background-music.mp3';
import audioFile from '../audio/bomb.mp3';

const GHome = () => {
  const [isPopupOpen1, setPopupOpen1] = useState(false);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const [isPopupOpen3, setPopupOpen3] = useState(false);

  const [isErezCorrect, setIsErezCorrect] = useState(false);
  const [isGazaPortCorrect, setIsGazaPortCorrect] = useState(false);
  const [isRafiahCorrect, setIsRafiahCorrect] = useState(false);

  const [missileVisible, setMissileVisible] = useState(false);

  const openPopup1 = () => {
    setPopupOpen1(true);
  };

  const closePopup1 = () => {
    setPopupOpen1(false);
  };

  const openPopup2 = () => {
    setPopupOpen2(true);
  };

  const closePopup2 = () => {
    setPopupOpen2(false);
  };

  const openPopup3 = () => {
    setPopupOpen3(true);
  };

  const closePopup3 = () => {
    setPopupOpen3(false);
  };

  const handleErezCorrect = () => {
    setIsErezCorrect(true);
  };

  const handleGazaPortCorrect = () => {
    setIsGazaPortCorrect(true);
  };

  const handleRafiahCorrect = () => {
    setIsRafiahCorrect(true);
  };

  const handleCountdownCompletion = () => {
    const audio = new Audio(audioFile);
    audio.play();

    setMissileVisible(true);
  };

  useEffect(() => {
    const audioElement = new Audio(song);
    audioElement.play();
  }, []);

  return (
    <div className='GHome-room'>
      <Stopwatch onCountdownComplete={handleCountdownCompletion} />
      <div id='GazaMap' className="GazaMap-container">
        <button className="GbuttonStyle" id='Erez' onClick={isErezCorrect ? null : openPopup1}>
          {isErezCorrect ? 'V' : 'Check point Erez'}
        </button>
        <Popup isOpen={isPopupOpen1} onClose={closePopup1} img={GazaPortImg} input1="1234" input2="4321" onAnswerCorrect={handleErezCorrect} />

        <button className="GbuttonStyle" id='GazaPort' onClick={isGazaPortCorrect ? null : openPopup2}>
          {isGazaPortCorrect ? 'V' : 'ميناء غزة البحري - الصيادين'}
        </button>
        <Popup isOpen={isPopupOpen2} onClose={closePopup2} img={GazaPortImg} input1="5741" input2="1475" onAnswerCorrect={handleGazaPortCorrect} />

        <button className="GbuttonStyle" id='Rafiah' onClick={isRafiahCorrect ? null : openPopup3}>
          {isRafiahCorrect ? 'V' : 'رفيع'}
        </button>
        <Popup isOpen={isPopupOpen3} onClose={closePopup3} img={GazaPortImg} input1="1234" input2="4321" onAnswerCorrect={handleRafiahCorrect} />

        {missileVisible && (
          <img
            src={Missile}
            alt="Entering Image"
            className="image-enter"
          />
        )}
      </div>
    </div>
  );
}

export default GHome;
