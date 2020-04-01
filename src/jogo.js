import React from 'react';
import {useState} from 'react';

export const Jogo=(props)=>{
  const [jogoState,setJogoState]=useState(
    {
       jogadores: props.Jogadores,
       actual:0
    }  
    );
  
  const aceitar=()=>{

  console.log(jogoState.jogadores.length);
  console.log(jogoState.actual);

   if (jogoState.actual=== jogoState.jogadores.length-1){
       props.fimDoJogo([
           ...jogoState.jogadores
       ]);
       
   }else {
    setJogoState({
        ...jogoState,
        actual:jogoState.actual+1
    })
   }
     
  }

  function setMoedas(e){
    let  jogadoresAux=[...jogoState.jogadores];
    jogadoresAux[jogoState.actual].moedas= e.currentTarget.value;
     setJogoState({
       ...jogoState,
       jogadores:jogadoresAux  });
   
  }

  function setAposta(e){
    let  jogadoresAux=[...jogoState.jogadores];
    jogadoresAux[jogoState.actual].aposta= e.currentTarget.value;
     setJogoState({
       ...jogoState,
       jogadores:jogadoresAux  });
   
  }



  return(
    <div>
      <p>{jogoState.jogadores[jogoState.actual].nome}</p>
      <div>
        <label>moedas</label> <br/>
        <input id="moedas" type="text" value={jogoState.jogadores[jogoState.actual].moedas} onChange={(e)=>setMoedas(e)}/>
       </div>   
      <div>
      
      <label>aposta</label><br/>
      <input id="aposta" className="tt" type="text" value={jogoState.jogadores[jogoState.actual].aposta} onChange={(e)=>setAposta(e)}/>
     
      </div>
      
      <button onClick={aceitar}>OK</button>  
      
    </div>
  )
}