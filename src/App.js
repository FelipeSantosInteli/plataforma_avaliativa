
import './App.css';

import Checkbox from './componets/Checkbox';
import TextInput from './componets/TextInput'
import Btn from './componets/Btn'

import logo from './assets/images/vtal_black.png'
import brasil from './assets/images/brasil.png'

function App() {
  return (
    <div class="flex card flex-col justify-items-center content-center center overflow-hidden" style={{height:"70%",width:"30%",minWidth:'25rem',maxWidth:'30rem', minHeight:'39rem', maxHeight:'40rem'}}>

      <div class="card-bg -z-10"></div>
      
      <div class="p-10">
        <section class="flex flex-col pr-12 pl-12 pt-6">
          <div class="flex flex-row justify-between items-center" style={{textAlign:'start'}}>
            <div class="flex flex-col items-start">
              <img src={logo} alt="Logo V.Tal" class="logo"></img>
              <h3 class="pl-5" style={{fontWeight:400,whiteSpace:'nowrap',verticalAlign:'bottom'}}>O futuro passa por aqui</h3>
            </div>

            <img class="w-28" src={brasil} alt="Desenho de contorno Brasil"></img>
          </div>

          <div class="h-2 pt-2" style={{backgroundColor: 'var(--base)',paddingLeft:65,paddingRight:65}}></div>
        </section>

        <section class="">
          <div class="flex flex-col items-center" style={{padding:10}}>
            <TextInput label={"Usuário"} placeholder={"Email"} icon="fa-regular fa-envelope"/>

            <br></br>

            <TextInput type={"password"} label={"Senha"} placeholder={"Senha"} icon="fa-regular fa-eye"/>

            <br></br>
          </div>

          <section class="flex flex-row justify-around">
            <Checkbox label={"Continuar conectado"}/>
            <a href='#' class="text-black text-opacity-50" style={{margin:0,padding:1}}>Esqueceu a senha?</a>
          </section>
        </section>
        
        <section class="flex flex-col content-center" style={{paddingLeft:65,paddingRight:65,paddingTop:'3rem'}}>
          <Btn text={"Entrar"}/>
        </section>
      </div>
    
    </div>
  );
}

function Home() {

}

export default App;
