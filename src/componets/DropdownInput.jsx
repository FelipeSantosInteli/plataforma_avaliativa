import './components_css/DropdownInput.css'
import React from 'react';
import $ from 'jquery'
import { useState } from 'react';
import onClickOutside from 'click-outside-js';

function DropdownInput({label,placeholder, optionsArray, count}) {

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('');

    var fieldId = 'textBox' + count;

    var textBox = document.getElementById(fieldId);

    var el = textBox;

    onClickOutside(el, function() {
        setIsActive(false);
        textBox.classList.replace("open", "closed");
    })

    return (
        <div>
            <label  class="font-extralight pl-6" style={{color:"var(--subheading)"}}>{label}</label>
            <div id={fieldId} class="dropdownInput textBox relative w-60 h-12 mx-5 my-2 z-10 select-none closed">
                <input type="text" class="absolute top-0 left-0 w-full h-full py-3 px-5" placeholder={placeholder} onClick={(e) => {setIsActive(!isActive);textBox.classList.replace("open", "closed");}} value={selected} readOnly/>
                {isActive && textBox.classList.replace("closed", "open")}
                {isActive && (
                    <div class="options absolute w-full font-extralight mb-40 pt-12 -z-10 max-h-80 overflow-y-auto">
                        <div style={{color:"var(--grey2)"}} class="font-thin" onClick={(e) => {
                            setSelected("");
                            setIsActive(false);
                            textBox.classList.replace("open", "closed");
                        }}>Selecione</div>

                        {optionsArray.map((option) => (
                                <div class="" onClick={(e) => {
                                    setSelected(option);
                                    setIsActive(false);
                                    textBox.classList.replace("open", "closed");
                                }
                            }>
                                {option}
                            </div>))
                        }
                    </div>)
                }

            </div>  
        </div>
        
    )
}

export default DropdownInput;