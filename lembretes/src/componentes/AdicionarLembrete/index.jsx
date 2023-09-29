import React, { useContext } from 'react'
import { LembretesContext } from '../../common/context/lembretes'
import { Formulario } from './styles';

const AdicionarLembrete = () => {
    const { lembretes, pegaTexto, adicionaLembrete, texto } = useContext(LembretesContext);


    function aoEnviar(event) {
        event.preventDefault();
        adicionaLembrete()
    }

  return (
        <>
            <h1>Adicionar Lembretes</h1>
            <Formulario onSubmit={aoEnviar}>
                <label htmlFor="lembretes">Lembrete:</label>
                <textarea onChange={(event) => pegaTexto(event.target.value)} value={texto} type="textarea" name='lembretes'></textarea>
                <button type='submit'>Enviar</button>
            </Formulario>
        </>
  )
}

export default AdicionarLembrete