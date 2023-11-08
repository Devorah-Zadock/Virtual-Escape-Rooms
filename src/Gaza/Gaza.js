import './Gaza.css';
import { Link } from 'react-router-dom';


const Gaza = () => {

    return (
        <div className='Gaza-room'>
            <h1>הבריחה מעזה</h1>
            <p>.בשנת 2023, ביום שמחת תורה, פרצה מלחמת "חרבות ברזל" על ידי החמאס - דאעש<br/>
            .צה"ל פתח במגננה ועבר למתקפה, אין ספור רקטות נשלחו ומאות מחבלים חוסלו בחסד השם<br/>
            .צה"ל הודיע לתושבי עזה להתפנות מיד מהבתים. אתם התושבים המנסים לברוח<br/></p>
            <p id='scrared'>...יש לכם 10 דקות עד שהטיל נוחת עליכם</p>
            <Link to="/GHome" className='start'>התחל משחק</Link>
        </div>
    )
}

export default Gaza;