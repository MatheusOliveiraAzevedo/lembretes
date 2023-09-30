import React, { createContext, useState } from 'react'

export const LembretesContext = createContext();

export const LembretesProvider = ({ children }) => {

  const [lembretes, setLembretes] = useState([]);
  const [texto, setTexto] = useState("");
  const [corLembrete, setCorLembrete] = useState("#4fa186");
  const [idLembrete, setIdLembrete] = useState(0)

  return (
    <LembretesContext.Provider
      value={{
        lembretes,
        setLembretes,
        pegaTexto,
        excluirLembrete,
        corLembrete,
        setCorLembrete,
        pegaCor,
        trocaCor,
        aoEnviar,
        texto
      }}
    >
      {children}
    </LembretesContext.Provider>
  )

  function pegaTexto(texto) {
    setTexto(texto)
  }

  function pegaCor(cor) {
    setCorLembrete(cor)
  }
  
  function excluirLembrete(id) {
    const excluido = lembretes.filter((lembrete) => id !== lembrete.id)
    setLembretes(excluido)
  }
  
  function trocaCor(cor, lembrete) {
    lembrete.cor = cor
    pegaCor(cor)
  }
  
  function aoEnviar(event) {
    event.preventDefault();
    setLembretes([...lembretes, { "texto": texto, "id": idLembrete, "cor": corLembrete }]);
    setIdLembrete(idLembrete + 1);
    setTexto("");
  }
}


