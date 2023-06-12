import React from 'react'

function Lista(props){
   
    return(
        <div>        
            <input 
            id={props.id}
            type='checkbox'
            defaultChecked={props.completed}
            onChange={() => props.alternaNomesCompleted(props.id)}
        />
        <label>
            {props.nome}
        </label>
    
        </div>
        
    )
    
  }

  export default Lista
