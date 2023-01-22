import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function FormScale({scale, question}) {
    return(
        <div>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{question}</FormLabel>
                <br />
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {
                        scale.map((item, index) => (
                            <FormControlLabel value={item.value} control={<Radio sx={{'&.Mui-checked': {color: "var(--accent-color)"}}} />} label={item.label} />
                        ))
                    }
                    <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default FormScale;