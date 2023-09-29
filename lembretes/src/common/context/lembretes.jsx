import React, { createContext, useState } from 'react'

export const LembretesContext = createContext();

export const LembretesProvider = ({ children }) => {

    const [lembretes, setLembretes] = useState([]);
    const [texto, setTexto] = useState("");
    const [idLembrete, setIdLembrete] = useState(0)

  return (
    <LembretesContext.Provider
    value={{
        lembretes,
        setLembretes,
        pegaTexto,
        adicionaLembrete,
        excluirLembrete
    }}
    >
        {children}
    </LembretesContext.Provider>
  )

  function pegaTexto(texto) {
    setTexto(texto)
  }

  function adicionaLembrete () {
    setLembretes([...lembretes, { "texto": texto, "id": idLembrete }])
    setIdLembrete(idLembrete + 1)
  }

  function excluirLembrete (id) {
    const excluido = lembretes.filter((lembrete) => id !== lembrete.id)
    setLembretes(excluido)
  }
}


