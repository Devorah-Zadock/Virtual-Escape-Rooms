import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, img, input, onAnswerCorrect }) => {
  const [userInput, setUserInput] = useState('');

  const handleCheck = () => {
    if (userInput === input) {
      setUserInput('');
      onAnswerCorrect();
      onClose();
    } else {
      setUserInput('');
    }
  }

  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={img} alt="Popup Image" />
        <input
          type="password"
          placeholder="הכנס קוד"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleCheck}>אישור</button>
      </div>
    </div>
  );
};

export default Popup;
