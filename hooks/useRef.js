//useRef

/* Em alguns casos precisamos acessar elementos através de referências na nossa
árvore (DOM) — como por exemplo, para pegar valores de inputs quando estamos
trabalhando com uncontrolled components, ou então forçar focus, blur, este tipo
de coisa.

Nos componentes funcionais temos o useRef, o atribuirmos à uma variável, passamos um
valor inicial como argumento (no exemplo, o null) e enviamos esta variável na
propriedade ref do elemento: */

import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    alert.apply(inputRef.current.value);
  }

  /* temos um objeto e a referência do target fica dentro de uma
  propriedade chamada current. Então para obtermos o value do nosso input,
  usamos */

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Obter valor</button>
    </>
  )
}
