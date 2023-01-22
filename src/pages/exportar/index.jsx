import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import DropdownInput from "../../componets/DropdownInput";

import './exportar.css'
import BtnLight from "../../componets/BtnLight";

const optionsArray = ['option1', 'option2', 'option3', 'option4','options5','options6','option7'];
const optionsArray2 = ['sqwq','wdsdsds','dafsafdds']

function Exportar() {
    return(
        <div>
            <Navbar/>
            <div id="mainScreen" class="mainScreen p-10 pt-52">
                <section class="flex flex-col w-full">
                    <div class="cardLight flex flex-row items-center justify-between px-12 py-8 w-full">
                        <div class="flex flex-row items-center">
                            <i class="fa-solid fa-file-export pr-3 pb-3 text-5xl"></i>
                            <h1 class="font-semibold text-3xl">Exportação de dados</h1>
                        </div>
                    </div>
                    <br />
                    <div class="card flex flex-col justify-items-start justify-evenly p-10">
                        <h1 class="font-semibold text-xl">Filtros de pré-download</h1>
                        <br />
                        <div class="z-40">
                            <DropdownInput count={100} label={"Qual questionário?"} placeholder={"Selecione"} optionsArray={optionsArray}/>
                        </div>
                        <br />
                        <section class="flex flex-wrap justify-between py-5 z-30">
                            <div class="z-50">
                                <DropdownInput count={1} label={"N1"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>
                            <div class="z-40">
                                <DropdownInput count={2} label={"N2"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>
                            
                            <div class="z-30">
                                <DropdownInput count={3} label={"N3"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>

                            <div class="z-20">
                                <DropdownInput count={4} label={"N4"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>
                            
                            <div class="z-10">
                                <DropdownInput count={5} label={"N5"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>
                            
                            
                        </section>
                        <br />
                        <section class="flex flex-wrap justify-between py-5 z-20">
                            <div class="z-50">
                                <DropdownInput count={6} label={"Cargo"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>

                            <div class="z-40">
                                <DropdownInput count={7} label={"Nível hierárquico"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>
                            
                            <div class="z-30">
                                <DropdownInput count={8} label={"Gestor"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>
                            
                            <div class="z-20">
                                <DropdownInput count={9} label={"Avaliações pendentes"} placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>
                        </section>

                        <br /><br /><br />

                        <section class="flex justify-end px-6">
                            <BtnLight text={"Baixar Excel"}/>
                        </section>

                    </div>
                    
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Exportar;