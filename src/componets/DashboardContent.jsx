import './components_css/DashboardContent.css'
import { Divider } from "@mui/material";

import * as React from 'react';
import {Box,Checkbox,FormControlLabel,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow} from '@mui/material';
import TableModel from './TableModel';
import PiechartTest from './Piechart';


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

    var columnsName = ['Status', 'Grupo']

    const chartData = [
      { name: 'Group A', value: 10, color:'#0088FE' },
      { name: 'Group B', value: 10, color:'#00C49F' },
      { name: 'Group C', value: 20, color:'#FFBB28' },
      { name: 'Group D', value: 20, color:'#FF8042' },
      { name: 'Group E', value: 40, color:'#BA55D3' }
    ];

    var total = 0

    const avaliadoresTotal = chartData.map((data) => (
      total += data.value
    ))

    return(
        <div>
            <div class="w-fit pb-10">
                <h1 class="font-semibold text-3xl">Acompanhamento</h1>
                <Divider sx={{width:"auto",borderColor:"#DE6830",borderBottomWidth:".4rem"}}/>
            </div>
            <section class="flex flex-wrap justify-between items-stretch pb-6 w-full">
                <div class="cardLight mb-6 p-10 w-1/2" style={{minWidth:"25rem",height:"auto"}}>
                    <h2 class="font-semibold text-2xl">Filtros do Gráfico</h2>
                    <br />
                    <div class="">
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
                <div class="cardLight h-fit flex flex-col p-10" style={{width:"45%",minWidth:"25rem", height:"40rem"}}>
                  <h2 class="font-semibold text-2xl" style={{maxWidth:"15rem"}}>Status de Entrega de Avaliação</h2>
                  <div class="pt-2">
                    <div class="flex flex-row">
                        <h3 class="font-semibold pr-1" style={{color:"var(--info)"}}>Total de avaliadores:</h3><h3>{total}</h3> 
                    </div>
                  </div>
                  
                  <div class="p-10 flex justify-center">
                    <PiechartTest data={chartData} size={150}/>
                  </div>

                  <div class="flex flex-row justify-between">
                    {
                      chartData.map((item) => (
                        console.log(item),
                        <div class="flex flex-row justify-between items-center p-5">
                          <label class="h-4 w-4 mr-1" style={{background:item.color}}></label>
                          <h1 class="pr-1">{item.value}</h1>
                          <h1>{item.name}</h1>
                        </div>
                      ))
                    }
                  </div>
                    
                </div>
            </section>
            <div class="w-fit pb-10">
                <h1 class="font-semibold text-3xl">Resultado</h1>
                <Divider sx={{width:"20rem",borderColor:"#0B8C56",borderBottomWidth:".4rem"}}/>
            </div>
            <section class="cardLight p-6 w-full">
                <TableModel title={"Resultado Filtrados"} displayCount={10} columnsName={['Status','Grupo','Gestor']}/>

            </section>
        </div>
    )
}

export default DashboardContent;