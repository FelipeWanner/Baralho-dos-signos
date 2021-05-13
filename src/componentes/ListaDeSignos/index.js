import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import listaParametros from "../ListaDeParametros";

import './estilo.css';

//Aqui, ao invés de fazer 12 <itemListas> (conforme solicitado no curso), criei um array com 12 objetos chamado 
//"listaParametros", dentro do arquivo "ListaDeParametros", e o importei
//então nesse arquivo, só precisei criar um map sobre este array, retornando os respectivos itens!

//o atributo "key" é utilizado para o react saber qual item ele está renderizando, conforme tutorial:
//https://kentcdodds.com/blog/understanding-reacts-key-prop
//utilizar o index como key é uma má prática, pq o index pode sofrer mudancas, e isso numa mudanca do dom de forma
//dinamica pode afetar o render, pois se removermos algum elemento da lista, o que antigamente foi renderizado como
//index 2, agora pode passar a ser index 1, e será renderizado no lugar errado.

export default function ListaDeSignos() { 
  return (
    <div>
      <Titulo />

      <div className="lista">
        {listaParametros.map((item) => {
        return(
          <ItemLista key={item.key}
          signo={item.signo}
          dataInicio={item.dataInicio}
          dataFim={item.dataFim}
          imagem={item.imagem}/>
        )}
        )}
        
      </div>
    </div>
  )
}