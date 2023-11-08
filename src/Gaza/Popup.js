import React, { useState, useEffect, useRef } from 'react';

const Popup = ({ isOpen, onClose, img, input1, input2, onAnswerCorrect }) => {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCheck = () => {
    if (userInput === input1 || userInput === input2) {
      setUserInput('');
      onAnswerCorrect();
      onClose();
    } else {
      setUserInput('');
      alert("סיסמה שגויה");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCheck();
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
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            setUserInput(value);
          }}
          onKeyPress={handleKeyPress}
          ref={inputRef}
          autoFocus
        />
        <button onClick={handleCheck}>אישור</button>
      </div>
    </div>
  );
};

export default Popup;
