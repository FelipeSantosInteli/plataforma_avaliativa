import './components_css/TextInput.css'

const TextInput = ({label, placeholder}) => {
    return (
        <div class="flex-col">
          <h5 class="label" style={{margin:0, paddingBottom:10}}>{label}</h5>
          <input class="text-input" placeholder={placeholder}></input>
        </div>
    )
}

export default TextInput;