import './components_css/TextInput.css'

const TextInput = ({label, placeholder,icon,type}) => {
    return (
        <div class="flex-col">
          <h5 class="label text-black text-opacity-80 font-semibold" style={{margin:0, paddingBottom:5}}>{label}</h5>
          <div class="flex flex-row items-center">
            <input type={type} class="text-input" placeholder={placeholder}></input>
            <i class={icon} style={{position:'absolute',marginLeft:"20rem"}}></i>
          </div>
        </div>
    )
}

export default TextInput;