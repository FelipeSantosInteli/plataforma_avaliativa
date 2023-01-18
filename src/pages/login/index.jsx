import Checkbox from '../../componets/Checkbox';
import TextInput from '../../componets/TextInput'
import BtnDark from '../../componets/BtnDark'

import './login.css'

import brasil from '../../assets/images/brasil.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VtalLogo_black from '../../assets/svgs/VtalLogo_black/export';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", {email, password});
    window.location.href = '/home'
  }

  return (

    <section class="overflow-hidden">
      <div class="trapezium fixed"></div>
      <img class="background" src="./background_login.png" alt="Aleq"></img>

      <div class="flex card flex-col justify-items-center content-center center overflow-hidden" style={{height:"70%",width:"30%",minWidth:'25rem',maxWidth:'30rem', minHeight:'39rem', maxHeight:'40rem'}}>

        <div class="card-bg -z-10"></div>
        
        <form class="p-10">
          <section class="flex flex-col pr-12 pl-12 pt-6">
            <div class="flex flex-row justify-between items-center" style={{textAlign:'start'}}>
              <div class="flex flex-col items-start">
                <VtalLogo_black width={"11rem"}/>
                <h3 class="pl-2 pt-3" style={{fontWeight:400,whiteSpace:'nowrap',verticalAlign:'bottom'}}>O futuro passa por aqui</h3>
              </div>

              <img class="w-28" src={brasil} alt="Desenho de contorno Brasil"></img>
            </div>

            <div class="h-2 pt-2" style={{backgroundColor: 'var(--base)',paddingLeft:65,paddingRight:65}}></div>
          </section>

          <section class="">
            <div class="flex flex-col items-center" style={{padding:10}}>
              <TextInput htmlFor={"email"} type={"email"} label={"Usuário"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} icon="fa-regular fa-envelope"/>

              <br></br>

              <TextInput htmlFor={"password"} type={"password"} label={"Senha"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Senha"} icon="fa-regular fa-eye"/>

              <br></br>
            </div>

            <section class="flex flex-row justify-around">
              <Checkbox label={"Continuar conectado"}/>
              <a href='#' class="text-black text-opacity-50" style={{margin:0,padding:1}}>Esqueceu a senha?</a>
            </section>
          </section>
          
          <section class="flex flex-col justify-center items-center" style={{paddingLeft:65,paddingRight:65,paddingTop:'3rem'}}>
            <BtnDark type={"submit"} text={"Entrar"} onClick={handleSubmit}/>
          </section>
        </form>
      
      </div>
    </section>
  );
}

export default Login;
