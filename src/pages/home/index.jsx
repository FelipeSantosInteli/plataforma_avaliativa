import Navbar from "../../componets/Navbar"
import DropdownMenu from "../../componets/DropdownInput"
import BtnDark from "../../componets/BtnDark"
import BtnLight from "../../componets/BtnLight"
import DropdownCard from "../../componets/DropdownCard"
import Footer from "../../componets/Footer"

import $ from 'jquery'

import './home.css'

import userImage from '../../assets/images/user_placeholder.jpeg'

function Home() {

    var previousStep = "Validação da Rede de Avaliações - Lider de dd/mm/aa até dd/mm/aa."
    var nextStep = "Avaliação"

    var userName = "Kil Matheus Gomes Teixeira"
    var userArea = "Tecnologia"
    var userEmail = "kil.teixeira@vtal.com"
    var userManager = "Felipe Gomes Rodrigues dos Santos"
    var compactUserManager = userManager.split(' ').slice(0, 2).join(' ');
    const optionsArray = ['option1', 'option2', 'option3', 'option4','options5','options6','option7'];
    const optionsArray2 = ['sqwq','wdsdsds','dafsafdds']
    
    $(function () {
        var Fixed = document.getElementById("Fixed");
        $(window).scroll(function () {
            if ($(window).scrollTop() === 0) {
                Fixed.style.transition = '.5s';
                Fixed.style.marginTop= "0rem"
            }
            else {
                Fixed.style.transition = '.5s';
                Fixed.style.marginTop= "-7rem"
            }
        });
    });

    return (
        <div class="">
            <Navbar />
            <div id="mainScreen" class="mainScreen p-16 pt-52">
                <section class="flex flex-row justify-between w-full">
                    <div class="max-w-md" style={{width:"100rem"}}></div> 
                    <div id="Fixed" class="card p-8 max-w-md fixed top-52">
                        <div class="flex flex-row items-center justify-between pb-4">
                            <img src={userImage} alt="user" class="rounded-full bg-slate-500 h-24 w-24 user m-6 mb-16" />
                            <div class="flex-wrap justify-between" style={{maxWidth:"11rem"}}>
                                <h1 class="font-extrabold text-2xl">{userName}</h1>
                                <h2 class="font-extralight" style={{color:"var(--subheading)"}}>{userArea}</h2>
                                <br />
                                <div>
                                    <h2><i class="fa-regular fa-envelope pr-2"></i>{userEmail}</h2>
                                    <h2><i class="fa-regular fa-user pr-2"></i>{compactUserManager}</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            
                            <div class="box-container p-4 flex flex-col items-center">
                                <DropdownMenu label={"Questionários"} count="3" placeholder={"Selecione"} optionsArray={optionsArray}/>
                                <br />
                                <div>
                                    <div class="flex">
                                        <h1 class="font-semibold whitespace-nowrap">Etapa Anterior: </h1><h2 class="font-thin pl-2">{previousStep}</h2>
                                    </div>
                                    <br />
                                    <div class="flex">
                                        <h1 class="font-semibold whitespace-nowrap">Etapa Atual: </h1><h2 class="font-thin pl-2">{nextStep}</h2>
                                    </div>
                                </div>
                                <br />
                                <BtnDark text="Continuar Etapa"/>
                            </div>
                        </div>
                    </div>
                    <section class="pl-10 w-full h-fit">
                        <div class="card flex flex-col justify-between p-10 w-full">
                        
                            <div class="z-40">
                                <DropdownMenu label={"Filtros"} count="1" placeholder={"Selecione"} optionsArray={optionsArray2}/>
                            </div>

                            <DropdownCard text={"Avaliações"} count={1} content={<div>

                                    <DropdownMenu label={"Questionários"} count="4" placeholder={"Selecione"} optionsArray={optionsArray2}/>

                                <br />

                                <h2 class="font-semibold pb-2">Aderência à Cultura - Autoavaliação</h2>
                                <div class="box-container flex justify-between p-8 items-center">
                                    <div class="flex flex-col justify-between">
                                        <div class="flex flex-col justify-between">
                                            <h1 class="font-semibold text-3xl">Cultura</h1>
                                            <h2 class="font-semibold text-xl">Auto</h2>
                                        </div>
                                        <br />
                                        <h3>Atitude Consistente</h3>
                                        <br />
                                    </div>
                                    <BtnLight text={"Média das Redes Atitude Consistente"}/>
                                </div>

                            </div>}/>

                        </div>
                    </section>
                    

                </section>
            </div>
            <Footer/>

            {
                
            }

        </div>
    )
}

export default Home