import './components_css/DashboardContent.css'
import { Divider } from "@mui/material";

import * as React from 'react';
import {Box,Checkbox,FormControlLabel,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow} from '@mui/material';
import TableModel from './Table';


function DashboardContent() {
    const [checked, setChecked] = React.useState([false, false, false, false]);

    const handleChangeAll = (event) => {
      setChecked([event.target.checked, event.target.checked, event.target.checked,event.target.checked]);
    };
  
    const handleChange0 = (event) => {
      setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
    };
  
    const handleChange1 = (event) => {
      setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
    };

    const handleChange2 = (event) => {
        setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
    };
    
    const handleChange3 = (event) => {
        setChecked([checked[0], checked[1], checked[2], event.target.checked]);
    };
  
    const children = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Líder"
          control={<Checkbox sx={{color:"var(--accent-color)",'&.Mui-checked':{color:"var(--accent-color)"}}} checked={checked[0]} onChange={handleChange0} />}
        />
        <FormControlLabel
          label="Liderados"
          control={<Checkbox sx={{color:"var(--accent-color)",'&.Mui-checked':{color:"var(--accent-color)"}}} checked={checked[1]} onChange={handleChange1} />}
        />
        <FormControlLabel
          label="Auto-avaliação"
          control={<Checkbox sx={{color:"var(--accent-color)",'&.Mui-checked':{color:"var(--accent-color)"}}} checked={checked[2]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="Avaliação 360º"
          control={<Checkbox sx={{color:"var(--accent-color)",'&.Mui-checked':{color:"var(--accent-color)"}}} checked={checked[3]} onChange={handleChange3} />}
        />
      </Box>
    );

    return(
        <div>
            <div class="w-fit pb-10">
                <h1 class="font-semibold text-3xl">Acompanhamento</h1>
                <Divider sx={{width:"20rem",borderColor:"#DE6830",borderBottomWidth:".4rem"}}/>
            </div>
            <section class="flex flex-wrap justify-between items-stretch pb-6 w-full">
                <div class="cardLight mb-6 p-10 w-1/2" style={{minWidth:"25rem"}}>
                    <h2 class="font-semibold text-lg">Filtros do Gráfico</h2>
                    <br />
                    <div>
                        <FormControlLabel
                            label="Selecionar Tudo"
                            control={
                            <Checkbox
                                sx={{color:"var(--accent-color)"}}
                                checked={checked[0] && checked[1]}
                                indeterminate={checked[0] !== checked[1] || checked[0] !== checked[2] || checked[0] !== checked[3]}
                                onChange={handleChangeAll}
                            />
                            }
                        />
                        {children}
                    </div>
                </div>
                <br />
                <div class="cardLight p-10" style={{width:"45%",minWidth:"25rem"}}>
                    jsajksdhjka
                </div>
            </section>
            <div class="w-fit pb-10">
                <h1 class="font-semibold text-3xl">Resultado</h1>
                <Divider sx={{width:"20rem",borderColor:"#0B8C56",borderBottomWidth:".4rem"}}/>
            </div>
            <section class="cardLight p-6 w-full">
                <h2 class="font-semibold text-xl">Resultado Filtrados</h2>
                <br />

                <TableModel/>

            </section>
        </div>
    )
}

export default DashboardContent;