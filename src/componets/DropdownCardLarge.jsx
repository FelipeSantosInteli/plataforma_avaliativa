import './components_css/DropdownCardLarge.css'

import { useState } from 'react';
import { Divider } from '@mui/material';

function DropdownCardLarge({title,content,headerContent,count}) {

    const [isActive, setIsActive] = useState(false);

    var fieldId = "cardBoxLarge" + count;

    var cardBox = document.getElementById(fieldId);

    return(
        <div>
            <br />
            <div id={fieldId} class="card flex flex-col justify-between items-start overflow-clip dropdownCardLarge closed">
                <div class="cardHeaderLarge flex items-center py-2 px-4 w-full h-36" onClick={(e) => {setIsActive(!isActive);cardBox.classList.replace("open", "closed");cardBox.classList.toggle("max-h-36");}}>
                {isActive && cardBox.classList.replace("closed", "open")}
                    <div class="pt-5 px-3 w-full">
                        <h1 class="font-semibold text-xl">{title}</h1>
                        {headerContent}
                        <Divider sx={{width:'100%',borderBottomWidth:".15rem",borderColor:"black"}}/>
                    </div>
                </div>

                <section class="px-7 py-5 w-full">{content}</section>
                
            </div> 
            <br />
        </div>
        

    )
}

export default DropdownCardLarge;