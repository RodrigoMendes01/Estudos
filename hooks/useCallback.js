//useCallback

/* Ele serve para memorizar funções e
prevenir que elas sejam criadas a cada novo render do componente.

Este hook recebe apenas 2 argumentos: o primeiro é a função que queremos
memorizar e o segundo é um array de dependências que, assim como no
useEffect, sempre que um dos valores deste array mudar fará o hook executar
novamente e, consequentemente, recriar a função (e mais uma vez: todos os
valores externos (props, states, etc.) que forem usados dentro da função
memorizada devem estar declarados no array de dependências). */

import React, {useCallback, useState} from "react";

function App() {
  const [state, setState] = useState('')

  const handleClick = useCallback(() => {
    console.log('State update')
    setState(Math.random())
  }, [])

  return(
    <Button
      onClick={handleClick}
    />
  )
}

const Button = React.memo((props) => {
  console.log('Button re-rendered')
  return (
    <button onClick={props.onClick}>
      Clique
    </button>
  )
})

/* Usando o useCallback, o botão será rendereziado apenas uma vez e após os clicks, somente o estado será atualizado e não a função toda. */