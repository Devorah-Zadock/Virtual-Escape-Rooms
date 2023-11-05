import React from 'react';
import './GHome.css';
import { Link } from 'react-router-dom';
import Stopwatch from '../components/Stopwatch';
import Missile from '../components/Missile';
import Puzzle1 from '../images/puzzle1.png';
import Puzzle from '../components/Puzzle';

const GHome = () => {
  const openPuzzleWindow = () => {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;

    const puzzleWindow = window.open('', 'Puzzle Window', windowFeatures);
    puzzleWindow.document.title = 'Puzzle Window';
    puzzleWindow.document.body.innerHTML = '<div id="puzzle-container">' +
      '<h1>שאלה</h1>' +
      '<img src={Puzzle1} id="puzzle"></img>' +
      '<input type="password" id="userInput" />' +
      '<button onclick="checkUserInput()">OK</button>' +
      '</div>';

    puzzleWindow.checkUserInput = function () {
      const userInput = puzzleWindow.document.getElementById('userInput').value;
      if (userInput === "1234")
        puzzleWindow.close();
      else {
        const userInputField = puzzleWindow.document.getElementById('userInput').value = '';
      }
    };
  };


  return (
    <div className='GHome-room'>
      <Stopwatch />
      <div id='GazaMap' className="GazaMap-container">
        <button className="GbuttonStyle" id='Erez'>Check point Erez</button>
        <button className="GbuttonStyle" id='GazaPort' onClick={openPuzzleWindow}>ميناء غزة البحري - الصيادين</button>
        <button className="GbuttonStyle" id='Rafiah'>رفيع</button>
      </div>

    </div>
  );
}

export default GHome;
