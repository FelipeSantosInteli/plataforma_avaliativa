import './components_css/Btn.css'
const Btn = ({text}) => {
    return (
        <button style={{margin:'auto',width:"10rem",height:'3rem',fontWeight:500,fontSize:'15px'}}>{text}</button>
    )
}

export default Btn