import './components_css/DropdownCard.css'

import { useState } from 'react';

function DropdownCard({text,content,count}) {

    const [isActive, setIsActive] = useState(false);

    var fieldId = "cardBox" + count;

    var cardBox = document.getElementById(fieldId);

    return(
        <div>
            <br />
            <div id={fieldId} class="card flex flex-col justify-between overflow-clip dropdownCard h-fit closed">
                <div class="cardHeader flex items-center py-2 px-4 w-full" onClick={(e) => {setIsActive(!isActive);cardBox.classList.replace("open", "closed")}}>
                {isActive && cardBox.classList.replace("closed", "open")}
                    <h1 class="font-semibold">{text}</h1>
                </div>

                <section class="px-7 py-5">{content}</section>
                
            </div> 
            <br />
        </div>
        

    )
}

export default DropdownCard;