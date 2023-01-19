import './components_css/BtnDark.css'

const BtnDark = ({type, text, onClick, onSubmit}) => {
    return (     
        <button class="btnDark shadow-md" type={type} onClick={onClick} onSubmit={onSubmit} style={{margin:'0',width:"10rem",height:'fit-content',fontWeight:600,fontSize:'15px', letterSpacing:"1px"}}>{text}</button>
    )
}

export default BtnDark;