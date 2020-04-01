import React from 'react';
import {useState} from 'react';


export function VerNomeJogadores(props) {
  return (
   <div>
     {props.jogadores !== undefined
       ? props.jogadores.map((jog, idx) => {
           return (
             <div key={idx}>
               <p>{jog.nome}</p>
             </div>
           );
         })
       : null}   
       <button onClick={props.comecarJogo}>Start</button> 
   </div>
 );
}
export function NomeJogadores(props) {
  const [nomesState, setNomesState] = useState(props.jogadores);
  
  function setNomes() {
    props.setNomes(nomesState);
  }
  function adicionarJogador(){
    let arr = [...nomesState];
    
    arr.push({
      nome:'Jogador'+(arr.length+1),
      nMoedas:0,
      aposta:0
    });
    setNomesState(arr);
  }
  function changeJogador(e, idx) {
    let arr = [...nomesState];

    arr[idx].nome = e.currentTarget.value;
    setNomesState(arr);
  }

  return (
    <div>
      <button onClick={adicionarJogador}>Adiciona Jogador</button>
      {nomesState !== undefined
      
        ? nomesState.map((jog, idx) => {
            return (
              <div key={idx}>
                <input
                  type="text"
                  value={jog.nome}
                  onChange={e => changeJogador(e, idx)}
                />
              </div>
            );
          })
        : null}

      <button onClick={setNomes}>Start</button>
    </div>
  );
}


