//useState()

/* A função useState recebe um parâmetro (o valor inicial do estado ou uma função
que retorna este valor) e retorna um array com duas posições, sendo a primeira
delas o valor do estado e a segunda uma função que será responsável por alterar
o valor deste estado */

import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState('')

  return (
    <input
      value={name}
      onChange={event => setName(event.target.value)}
    />
  )
}

/* Uma característica deste hook é que podemos, na função que atualiza o state
(setName, no exemplo a cima), enviar uma função como argumento e nesta
função, capturar o valor atual do state (name) 

Esta funcionalidade é muito útil quando precisamos atualizar um estado baseado
em seu valor anterior (principalmente em hooks com arrays de dependência */

function Wallet() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <button
      onClick={() => setShowBalance((prevState) => !prevState)}
    >
      Toggle Balance
    </button>
  )
}