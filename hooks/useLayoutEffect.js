//useLayoutEffect

/* Tudo o que já aprendemos sobre o useEffect se aplica também para o
useLayoutEffect. Literalmente tudo. Função de efeito, array de dependências e
todas aquelas outras características de funcionamento que já foram abordadas
anteriormente. Eles são exatamente iguais. 

A única diferença de um pro outro é o tempo de execução, ou seja, em que
momento do ciclo de vida do componente cada um vai ser chamado.
Enquanto o useEffect executa após o componente ser renderizado e “printado" no
navegador, o useLayoutEffect é executado antes do browser receber as
atualizações, ou seja, antes do usuário ver em tela o resultado de uma atualização
de estado, por exemplo.

Outra característica é que diferente do useEffect que é assíncrono, o
useLayoutEffect é síncrono, o que quer dizer que o React vai esperar a função de
efeito do useLayoutEffect terminar para só então pular para o próximo stage da
timeline do lifecycle do componente, que no caso é a etapa onde o browser
recebe as atualizações e atualiza o componente em tela. Por isso, prefira sempre
usar o useEffect para evitar bloqueios nas atualizações visuais dos seus
componentes. */

import React, {useLayoutEffect, useState} from "react";

function App() {
  const [counter, setCounter] = useState[0]

  useLayoutEffect(() => {
    for (let i = 0 ; i < 5000; i++) {
      console.log(i)
    }
  }, [counter])

  function handlePlus() {
    setCounter(prevState => prevState + 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}

/* Toda vez que o botão for clicado e chamar a função handlePlus, por debaixo dos panos o useLayoutEffect vai estar executando o loop e e enquanto ele não finalizar, o contador não será atualizado visualmente para o usuário. */