//useMemo

/* recebe uma função e um array de dependências

Adiferença aqui é que ao invés de retornar a função passada no primeiro parâmetro
como no useCallback, o useMemo, por sua vez, executa esta função e retorna o
seu resultado. */

import React, {useMemo, useState} from "react";

function App() {
  const [state, setState] = useMemo(Math.PI)

  const memorizedValue = useMemo(() => {
    return someComplexCalcule(state)
  }, [state])

  return <h1>Valor memorizado: {memorizedValue}</h1>
}