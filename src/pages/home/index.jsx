import Navbar from "../../componets/Navbar"
import './home.css'

import userImage from '../../assets/images/user_placeholder.jpeg'

function Home() {

    var userName = "Kil Mateus Gomes Teixeira"
    var userArea = "Tecnologia"
    var userEmail = "kil.teixeira@vtal.com"
    var userManager = "Felipe Gomes Rodrigues dos Santos"
    var compactUserManager = userManager.split(' ').slice(0, 2).join(' ');

    return (
        <div class="">
            <Navbar />
            <div id="mainScreen" class="mainScreen p-16 pt-52">
                <section>   
                    <div class="card p-8">
                        <div class="flex flex-row items-center justify-between pb-4">
                            <img src={userImage} alt="user" class="rounded-full bg-slate-500 h-24 w-24 user mr-9 mb-16" />
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
                            <h2 class="font-extralight pl-6" style={{color:"var(--subheading)"}}>Questionários</h2>
                            <div class="box-container p-4">
                                <h2><i class="fa-regular fa-envelope pr-2"></i>{userEmail}</h2>
                                <h2><i class="fa-regular fa-user pr-2"></i>{compactUserManager}</h2>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </section>
            </div>
        </div>
    )
}

export default Home