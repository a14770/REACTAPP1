import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Mensagem from './Mensagem';
import Alerta from './Alerta';
import Contador from './Contador';
import Formulario from './Formulario';
import Tarefas from './Tarefas';


function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Olá React!</h1>
      <p className="lead text-center">
        Este é o teu primeiro componente React.
      </p>
      {/* Evento onClick em React usa camelCase e chama uma função */}
      <button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, Giovani!')}
      >
        Clica-me!
      </button>

      {/* Botão de contagem */}
      <Contador />



      <h1 className="text-center"></h1>
      {/* Cada componente recebe props diferentes */}
      <Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
      <Mensagem mytext="Os componentes permitem reutilizar código!" />

      {/* Alertas mensagens */}
      <Alerta tipo="success" texto="Este e um alerta de sucesso!" />
      <Alerta tipo="warning" texto="Este e um alerta de aviso!" />
      <Alerta tipo="danger" texto="Este e um alerta de erro!" />


      <h1 className="text-center text-primary">Formulário</h1>
      {/* Formulário do Luiz Santos */}
      <Formulario /> 

      <h1 className="text-center text-primary">Tarefas</h1>
      <Tarefas />    

    </div>
  );
}

export default App
