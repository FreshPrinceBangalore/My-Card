import profilePic from './assets/ProfilePic.jpg'
import './Card.css'

    function Card() {
        return (
            <div className="card">
                <img src={profilePic} alt="Profile Picture" className='img'/>
                <h2 className='head'>
                    Hi My Name is ALBIS ABEL DAS
                </h2>
                <h3 className='head1'>Web Devoloper</h3>
                <p className='p1'>
                    I am a dedicated, hardworking, and proactive Software Engineer with a solid foundation in
                    programming languages and debugging. Currently seeking an opportunity to leverage technical
                    skills in a challenging work environment, aiming to be a valuable asset to the organization and
                    aligning personal growth with the company's objectives.
                </p>

            </div>
        );
    }

export default Card