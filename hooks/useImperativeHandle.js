// useImperativeHandle

/* Em casos de uso de código imperativo — o que é recomendável evitar mas as
vezes se faz necessário — conseguimos manipular o valor da referência de um
componente React usando o useImperativeHandle.

Antes de mais nada, este hook só funciona junto do (forwardRef), que já existia nas
versões anteriores do React e serve para encaminhamento de referências, em
outras palavras, definir referências para componentes React assim como fazemos
com elementos HTML.

Ele é uma função que recebe outra função (um componente) como
argumento

Diferente dos componentes convencionais que já conhecemos, quando estamos
usando o forwardRef o nosso componente recebe, além das props, um segundo
argumento: a referência que foi definida na propriedade ref quando o componente
Form foi renderizado. */

import React, { useImperativeHandle, useRef } from "react";

function App() {
  const formRef = useRef(null)

  return (
    <>
      <Form ref={formRef}/>
      <button onClick={() => formRef.current.submit()}>
        submit
      </button>
    </>
  )
}

const Form = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    submit: () => {
      console.log('SUBMIT INVOKED')
    }
  }), [])

  return (
    <form>
      Formulário
    </form>
  )
})

/* Usando o
useImperativeHandle conseguimos definir quais serão os valores e métodos que
estarão disponíveis dentro da referência do componente. 

O primeiro parâmetro é a ref (que veio do segundo argumento do nosso
componente), o segundo é uma função que retorna um objeto (este objeto será o
valor da nossa ref) e por último, e não menos importante, um array de
dependências que funciona da exata mesma forma que já vimos no useEffect,
useCallback e useMemo: */
