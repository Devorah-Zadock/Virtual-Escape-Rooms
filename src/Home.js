import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import song from './audio/background-music.mp3';

function Home() {
    const showDevelopmentMessage = () => {
        window.alert("המשחק עדיין בפיתוח. נא בדוק מאוחר יותר.");
    };

    useEffect(() => {
        const audioElement = new Audio(song);
        audioElement.play();

        return () => {
            audioElement.pause();
            audioElement.currentTime = 0;
        };
    }, []);

    return (
        <div className="escape-room">

            <h1>!ברוכים הבאים לישראל</h1>
            <p>!...בכל הדורות ברחנו, מכל המדינות נמלטנו... עד שהגענו לארץ שהקב"ה הבטיח לנו, וגם כאן רודפים אותנו<br /><b>!בואו נכיר את ההסטוריה שלנו</b><br />!במשחקי הבריחה נטייל בכל העולם ובכל הזמנים, מימי אבותינו הקדושים ועד לרגעים אלו ממש</p>
            <div className="buttonRow">
                <Link to="/" className="buttonStyle" onClick={showDevelopmentMessage}>הבריחה מחרן</Link>
                <Link to="/Gaza" className="buttonStyle">הבריחה מעזה (ערבים)</Link>
                <Link to="/" className="buttonStyle" onClick={showDevelopmentMessage}>הבריחה מתימן</Link>
                <Link to="/" className="buttonStyle" onClick={showDevelopmentMessage}>הבריחה מספרד</Link>
            </div>
            <p>פיתוח אתרים - דבורה צדוק ©</p>
        </div>
    );
}

export default Home;