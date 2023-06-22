//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Campos from './componentes/Campos'
import Lista from './componentes/Lista'
import {nanoid} from "nanoid"


//função usada para unir os elementos criados, o app está sendo renderizado no index.js
function App(props) {
  
  function alternaNomesCompleted(id){
    const atualizaNomes = lista.map((nome)=>{
      if(id === nome.id){
        return{...nome, completed: !nome.completed}
      }
      return nome
    })
    setLista(atualizaNomes)
  }

  const [lista, setLista] = useState(props.nomes)

  //adicionando o nome
  function addTask(nome){
    const novoNome = {id:`nome-${nanoid()}`, nome, completed: true}
    setLista([...lista, novoNome])
  }

  const listaNomes = lista.map((nomeObjeto) => (
    <Lista
      id={nomeObjeto.id}
      nome={nomeObjeto.nome}
      completed={nomeObjeto.completed}
      alternaNomesCompleted={alternaNomesCompleted}
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
 
