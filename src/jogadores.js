import React from 'react';
import {useState} from 'react';

export const NumeroJogadores=(props)=>{
  const [nJogadores,setJogadores]=useState(props.nJogadores);
  console.log(props); 
  const aceitar=()=>{
    props.setNJogadores(nJogadores); 
   // props.setNJogadores(30); 
    //alert('n jogadores:'+nJogadores);
  }

  return(
    <div>
      <p>{props.titulo}</p>
      <input id="i1" type="text" value={nJogadores} onChange={(e)=>{
         console.log(e.currentTarget.value);
         setJogadores(e.currentTarget.value);
      }}/>
      <button onClick={aceitar}>OK</button>  
      
    </div>
  )
}