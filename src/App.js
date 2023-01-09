
import './App.css';

import Checkbox from './componets/Checkbox';
import TextInput from './componets/TextInput'
import Btn from './componets/Btn'

import logo from './assets/images/vtal_black.png'
import brasil from './assets/images/brasil.png'

function App() {
  return (
    <div class="flex card flex-col content-center index2" style={{height:"70%",width:"30%",minWidth:'25rem',maxWidth:'30rem'}}>

    <section class="flex flex-col">
      <div class="flex flex-row justify-between" style={{paddingLeft:60,paddingRight:60,paddingTop:15,textAlign:'start'}}>
        <div class="" style={{paddingTop:30}}>
          <img src={logo} alt="Logo V.Tal" class="logo"></img>
          <h3 style={{fontWeight:400}}>O futuro passa por aqui</h3>
        </div>

        <img src={brasil} alt="Desenho de contorno Brasil"></img>
      </div>

      <div style={{backgroundColor: 'var(--base)', height:7,paddingLeft:65,paddingRight:65,paddingBottom:20}}></div>
    </section>

    <section class="">
      <div class="flex flex-col content-center justify-around" style={{padding:10}}>
        <TextInput label={"Usuário"} placeholder={"Email"}/>

        <br></br>

        <TextInput label={"Senha+OTP"} placeholder={"Senha"}/>

        <br></br>
      </div>

      <section class="flex flex-row justify-around">
        <Checkbox label={"Continuar conectado"}/>
        <a href='#' class="link" style={{margin:0,padding:1}}>Esqueceu a senha?</a>
      </section>
    </section>
    
    <section class="flex flex-col content-center" style={{paddingLeft:65,paddingRight:65,paddingTop:'3rem'}}>
      <Btn text="Entrar"/>
    </section>
    
  </div>
  );
}

export default App;
