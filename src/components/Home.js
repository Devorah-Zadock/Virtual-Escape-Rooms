import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';

function Home() {
    const showDevelopmentMessage = () => {
        window.alert("המשחק עדיין בפיתוח. נא בדוק מאוחר יותר.");
      };
    return (
        <div className="escape-room">
            <h1>!ברוכים הבאים לישראל</h1>
            <p>!...בכל הדורות ברחנו, מכל המדינות נמלטנו... עד שהגענו לארץ שהקב"ה הבטיח לנו, וגם כאן רודפים אותנו<br/><b>!בואו נכיר את ההסטוריה שלנו</b><br/>!במשחקי הבריחה נטייל בכל העולם ובכל הזמנים, מימי אבותינו הקדושים ועד לרגעים אלו ממש</p>
            <div className="buttonRow">
                <Link to="/" className="buttonStyle" onClick={showDevelopmentMessage}>הבריחה מחרן</Link>
                <Link to="/Gaza" className="buttonStyle">הבריחה מעזה (ערבים)</Link>
                <Link to="/" className="buttonStyle" onClick={showDevelopmentMessage}>הבריחה מתימן</Link>
                <Link to="/" className="buttonStyle" onClick={showDevelopmentMessage}>הבריחה מספרד</Link>
            </div>
            <p>D.R.S. - פיתוח אתרים ©</p>
        </div>
    );
}

export default Home;