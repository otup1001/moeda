import React from "react";
import "./App.css";
import {NomeJogadores,VerNomeJogadores} from "./nomeJogadores";
import {Jogo} from "./jogo";
import { useState } from "react";
import {Resultados} from "./resultados";





function App() {
  const [jogoState, setJogoState] = useState({
    
    jogadores: [
      {
        nome:'Jogador1',
        moedas:0,
        aposta:0
      },
      {
        nome:'Jogador2',
        moedas:0,
        aposta:0
      }],
      
    temosJogadores:false,
    start:false,
    finish:false,
    vencedor:{}
  });

  function setNomeJogadores(pArrayJogadores) {

    setJogoState({
      ...jogoState,
      temosJogadores:true,
      jogadores: pArrayJogadores
    });
  }
   function start(){
    setJogoState({
      ...jogoState,
      start:true
    });    
   }

function reset(){
  setJogoState({
    ...jogoState,  
    start:true,
    finish:false,
    vencedor:{}
  })
}



   function finish(pJogadores){
     console.log('jogadores',pJogadores);
     let totalMoedas=0;
    for(let i=0; i < pJogadores.length; i++){
      console.log('jogador:',pJogadores[i]);
      totalMoedas=totalMoedas+parseInt(pJogadores[i].moedas);
    }
    console.log('total:',totalMoedas);
    let jogadorWin={};
    for(let i=0;i < pJogadores.length; i++){
      console.log('jogador:',pJogadores[i]);
      if(parseInt(pJogadores[i].aposta)===totalMoedas){
        jogadorWin={...pJogadores[i]};
        console.log(jogadorWin);
      }
    }
    if(jogadorWin!=={}){
      alert(jogadorWin.nome);
      setJogoState({
        ...jogoState,      
        jogadores: pJogadores,
        finish:true,
        vencedor:jogadorWin
      });
    }else{
      reset();
    }


    
   }
  const setup = !jogoState.temosJogadores ? (
    <NomeJogadores
     
      jogadores={jogoState.jogadores}
      setNomes={setNomeJogadores}
    />
  ) : (
    <VerNomeJogadores
   
    jogadores={jogoState.jogadores}
    comecarJogo={start} 
  /> 
  );
  const jogo = !jogoState.finish?(<Jogo Jogadores={jogoState.jogadores} fimDoJogo={finish}/>):<Resultados Jogadores={jogoState.jogadores}/>

  return (
    <div className="App">
      <header className="App-header">
        <p>Jogo da moeda</p>
        {jogoState.start?jogo:setup}
      </header>
    </div>
  );
}

export default App;
