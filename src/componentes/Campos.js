import React, {useState} from 'react'

function Campos(props){

  //nome inicia vazio
  const [nome, setNome] = useState("")

  //verificar evento de entrada
  function manipulaMudanca(e){
    setNome(e.target.value)
  }

  //manipula entrada de valor no campo
  function manipulaEnvio(e){
    e.preventDefault()
    props.addTask(nome)//chama a função addTask e mostra o valor de nome 
    setNome("")
  }

    return(
      <form onSubmit={manipulaEnvio}>
      
      <div className='div-campo' >
        <label>Nome:</label>
        <input
          type='text'
          className='campo-input'
          value={nome}
          onChange={manipulaMudanca}
          />
        <button>Enviar</button>
      </div>

      </form>
 
    )
    
  }

  export default Campos