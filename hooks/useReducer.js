//useReducer

/* Disparamos uma action e uma
função reducer faz a alteração no estado baseado no tipo de action que foi
disparada. 

Normalmente utilizamos este hook em duas situações: quando nosso código tem
uma lógica muito complexa e precisa alterar vários estados ao mesmo tempo, ou
quando precisamos que o estado de um componente seja alterado a partir de um
filho que está em níveis muito baixos. Neste caso, normalmente nós enviaríamos
uma função de callback via props componente por componente até chegar onde
gostaríamos (prop drilling), para então, neste componente, executar a função de
callback e desencadear as alterações no estado de seu pai. Porém, com o
useReducer, temos um ganho de performance (pequeno, mas existe) quando
enviamos a função dispatch via Context ao invés de um callback via props.

A função useReducer, assim como o useState, retorna um array com duas
posições: na primeira o state e na segunda a função dispatch, que será a
responsável por disparar as actions.
*/

import React, {useReducer} from "react"; 

const initialState = 1; /*🔵*/

function initializer(initialValue) {  
  return { count: initialValue}
} /*🔴*/

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error('Invalid action type')
  }
} /*🟢*/

function App() {
  const [state /*⚪*/, dispatch /*🟣*/] = useReducer(reducer, initialState, initializer)

  return (
    <div>
      <h1>Valor atual: {state.count}</h1>
      <button onClick={() => /*🟠*/dispatch({ type: 'increment'})}> + </button>
      <button onClick={() => /*🟠*/dispatch({ type: 'decrement'})}> - </button>
    </div>
  )
}

/*🔵
  VALOR INICIAL DO STATE
*/

/*🔴
  FUNÇÃO QUE SERÁ EXECUTADA NO PRIMEIRO RENDER, RECEBERÁ O VALOR DE INITIALSTATE COMO AGUMENTO E O RETORNO DESTA FUNÇÃO SERÁ O ESTADO INICIAL DO REDUCER
*/

/*🟢
  FUNÇÃO REDUCER É QUEM SERÁ EXECUTADA QUANDO A FUNÇÃO DISPATCH FOR INVOCADA, ELA RECEBE COMO ARGUMENTO O (STATE) ATUAL E A (ACTION) - VALOR QUE FOI ENVIADO DENTRO DA FUNÇÃO DISPATCH QUANDO INVOCADA
*/

/*⚪
  STATE É O ESTADO QUE SEMPRE QUE MUDAR... RE-RENDER
*/

/*🟣
  FUNÇÃO DISPATCH: RECEBE UM OBJETO E FAZ A FUNÇÃO REDUCER SER EXECUTADA, ATUALIZA O STATE E CONSEQUENTEMENTE FAZ UM RE-RENDER NO COMPONENTE
*/

/*🟠
  CHAMADA DA FUNÇÃO DISPATCH
*/