import cardPic from './assets/react.svg'
import './Card2.css'
function Card2(){
    return(<div className="card2">
        <img className='img2' src={cardPic} alt="Pic" />
        <h2 className='header2'>I used React</h2>
        <p className='p2'>I used React to create this card and display which is responsive and my card components can be used multiple times</p>
    </div>
    );
}

export default Card2