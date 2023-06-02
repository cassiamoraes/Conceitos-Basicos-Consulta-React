//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Campos from './componentes/Campos'
import Lista from './componentes/Lista'

//função usada para unir os elementos criados, o app está sendo renderizado no index.js
function App(props) {

  const [lista, setLista] = useState(props.nomes)

  //adicionando o nome
  function addTask(nome){
    const novoNome = {nome}
    setLista([...lista, novoNome])
  }

  const listaNomes = lista.map((nomeObjeto) => (
    <Lista
      nome={nomeObjeto.nome}
      />
  ))

  return (
    <div className="App">
      <header className="App-header">
      <Campos addTask={addTask}/>
      
      {listaNomes}
            
      </header>   
    </div>  

  );
}

export default App;
 
