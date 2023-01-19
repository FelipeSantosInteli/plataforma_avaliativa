import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";

import './dashboard.css'
import DropdownCardLarge from "../../componets/DropdownCardLarge";
import DashboardContent from "../../componets/DashboardContent";


function Dashboard() {

    var status = "Ativo"
    var periodo = "02/01/2023  à   27/01/2023"

    return(
        <div>
            <Navbar/>
            <div id="mainScreen" class="mainScreen p-16 pt-52">
                <section class="flex flex-col w-full">
                    <div class="cardLight flex flex-row items-center justify-between px-12 py-8 w-full">
                        <div class="flex flex-row items-center">
                            <i class="fa-solid fa-table-columns pr-3 pb-3 text-5xl"></i>
                            <h1 class="font-semibold text-3xl">Dashboard</h1>
                        </div>
                        <div class="w-64">
                            <h2 class="font-semibold text-xl break-normal" style={{color:"var(--info)"}}>Acompanhe os resultados das avaliações detalhadamente.</h2>
                        </div>
                    </div>
                    <DropdownCardLarge title={"Avaliação de Aderência de Cultura"} headerContent={<div class="flex flex-row justify-between pr-20">
                        <div class="py-4">
                            <div class="flex flex-row">
                               <h3 class="font-semibold pr-1" style={{color:"var(--info)"}}>Status:</h3><h3>{status}</h3> 
                            </div>
                            <div class="flex flex-row">
                               <h3 class="font-semibold pr-1" style={{color:"var(--info)"}}>Período programado:</h3><h3>{periodo}</h3> 
                            </div>
                        </div>
                        <div>
                            aberto
                        </div>
                        <div class="pt-2">Publicado</div>
                    </div>} content={<DashboardContent/>}/>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard;