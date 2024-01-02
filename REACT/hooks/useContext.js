//useContext

/* Assim como todos os hooks ele é uma função, ele recebe como parametro apenas o contexto que você criou anteriormente com createContext */

import React, {useContext, createContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value={{ mode: 'dark' }}>
      <Button/>
    </ThemeContext.Provider>
  )
}

function Button() {
  const theme = useContext(ThemeContext)
  return (
    <button>
      {theme.mode}
    </button>
  )
}