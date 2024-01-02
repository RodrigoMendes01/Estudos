//useEffect()

/* O useEffect também é uma função, porém, diferente do useState, esta não
retorna nenhum valor, precisamos apenas invocá-la no corpo do componente.

(É um bom lugar para fazer requisições à APIs)

Seu uso é muito simples: ele recebe apenas dois parâmetros: uma função de
efeito e um array de dependências que pode receber variáveis ou funções e
sempre que o valor de uma dessas variáveis sofre uma alteração ou uma das
funções deste array, a função de efeito e executada novamente. 

Vale lembrar também que toda função e variável (state, prop definida no corpo
do componente) que estiver sendo usada dentro da função de efeito deve estar
listada no array de dependências.*/

import React, { useEffect } from "react";

function UserInfo(props) {
  useEffect(() => {
    console.log(`O id do usuário mudou para: ${props.userId}`)
  }, [props.userId])
}

/* Uma outra característica do useEffect é que sua função de efeito não pode ser
uma async function, logo, se precisarmos executar este tipo de código dentro dela
temos estas duas opções: 

CRIANDO E EXECUTANDO UMA FUNÇÃO DENTRO DO USEEFFECT
*/

useEffect(() => {
  async function loadUserData() {
    await services.getUserById(props.userId)
  }

  loadUserData()
}, [props.userId])

// OU USANDO UMA IIFE (IMMENDIATELY INVOKED FUNCTION EXPRESSION)

useEffect(() => {
  (async () => {
    await services.getUserById(props.userId)
  })();
}, [props.userId])

/* Caso queira executar a função de efeito apenas uma vez, quando o componente for montado em tela, basta deixar o array de dependências vazio */

/* Para termos uma função que executa logo
antes do componente sair da tela, basta retornarmos uma função dentro do
useEffect: */

function App() {
  useEffect(() => {
    console.log('Componente montou')

    return () => console.log('Componente vai desmontar') 
  }, [])
}

//útil para remover event listeners