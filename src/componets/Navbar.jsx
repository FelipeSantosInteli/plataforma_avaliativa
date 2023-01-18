import './components_css/Navbar.css'
import userImage from '../assets/images/user_placeholder.jpeg'
import VtalLogo_black from '../assets/svgs/VtalLogo_black/export';

import $ from 'jquery';
import { Link } from 'react-router-dom';


    function Navbar({userName}) {
        
        function capitalizeFirstLetter(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        var route = capitalizeFirstLetter(String(window.location.pathname).replace('/',''));

        var prevScrollpos = window.pageYOffset;

        var userName = "Kil Mateus Gomes Teixeira"

        var compactUserName = userName.split(' ').slice(0, 2).join(' '); // retorna primeiro e segundo nome
        
        return (
                <header class="pb-0 z-50">
                    <div class="flex justify-between items-center flex-row z-30">
                        <div class="flex justify-between items-center flex-row">
                            <Link to="/home" class=""><VtalLogo_black width={"11rem"} alt="logo"/></Link>
                            <ul class="flex justify-center items-center pl-11">
                                <li><a class="link" href="/home">Home</a></li>
                                <li><a class="link" href="/people">People</a></li>
                                <li><a class="link" href="/avaliacoes">Avaliações</a></li>
                                <li><a class="link" href="/avaliadores">Avaliadores</a></li>
                                <li><a class="link" href="/dashboard">Dashboard</a></li>
                                <li><a class="link" href="/exportar">Exportar</a></li>
                            </ul>
                        </div>
                        <div class="flex flex-row justify-between items-center">
                            <i class="fa-regular fa-bell pr-3"></i>
                            <h2 class="pr-3">Bem vindo(a) {compactUserName}</h2>
                            <img src={userImage} alt="user" class="rounded-full bg-slate-500 h-14 w-14 user" />
                        </div>
                    </div>
                    <div id='scrollHidden' class="flex flex-col justify-center pb-3">
                        <div class="bg-black h-1 mt-4"></div>
                        <div class="flex flex-row pt-4 pl-2">
                            <a href={window.location.pathname}>{route}</a>
                        </div>
                    </div>

                    {
                        window.addEventListener("scroll", function(){
                            var header = document.querySelector("header");
                            var mainScreen = document.getElementById("mainScreen")
                            header.classList.toggle("sticky", window.scrollY >0);
                            if (window.scrollY >0) {
                                mainScreen.classList.replace("pt-52","pt-36")
                            } else {
                                mainScreen.classList.replace("pt-36","pt-52")
                                header.style.height ="11rem";
                            }
                        })
                
                    }

                    {
                        // function () {
                        //     var header = document.querySelector("header");
                        //     $(window).scroll(function () {
                        //         if ($(window).scrollTop() === 0) {
                        //             header.style.height ="11rem";
                        //         }
                        //     });
                        // }

                    }

                    {
                        window.onscroll = function() {
                            var currentScrollPos = window.pageYOffset;
                            var header = document.querySelector("header");
                            var scrollHidden = this.document.getElementById("scrollHidden");
                            if (prevScrollpos > currentScrollPos) {
                                scrollHidden.style.transition = '2s';
                                scrollHidden.style.visibility = 'visible';
                                scrollHidden.style.opacity = '1';
                                header.style.height = "8rem";
                                
                
                            } else {
                                scrollHidden.style.transition = '.25s';
                                scrollHidden.style.visibility = "hidden";
                                scrollHidden.style.opacity = '0';
                                header.style.height = "3.50rem";
                
                            }
                            prevScrollpos = currentScrollPos;
                        }
                    }

                </header>
        )
}

export default Navbar;