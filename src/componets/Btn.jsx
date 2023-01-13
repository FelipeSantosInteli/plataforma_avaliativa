import { Link } from 'react-router-dom'
import './components_css/Btn.css'

const Btn = ({type, text, onClick, onSubmit}) => {
    return (     
        <button class="btn" type={type} onClick={onClick} onSubmit={onSubmit}style={{margin:'auto',width:"10rem",height:'3rem',fontWeight:500,fontSize:'15px'}}>{text}</button>
    )
}

export default Btn