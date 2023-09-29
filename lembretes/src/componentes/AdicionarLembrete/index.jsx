import React, { useContext } from 'react'
import { LembretesContext } from '../../common/context/lembretes'

const AdicionarLembrete = () => {
    const { lembretes, pegaTexto, adicionaLembrete, texto } = useContext(LembretesContext);
  return (
        <>
            <h1>Adicionar Lembretes</h1>
            <section>
                <label htmlFor="lembretes">Lembrete:</label>
                <input onChange={(event) => pegaTexto(event.target.value)} type="text" name='lembretes'></input>
                <button onClick={() => adicionaLembrete()}>Enviar</button>
            </section>
        </>
  )
}

export default AdicionarLembrete