import './components_css/TextInput.css'

const TextInput = ({label, placeholder}) => {
    return (
        <div class="flex-col content-center">
          <h5 class="label" style={{margin:0, paddingBottom:10}}>{label}</h5>
          <input class="text-input justify-center" placeholder={placeholder}></input>
        </div>
    )
}

export default TextInput;