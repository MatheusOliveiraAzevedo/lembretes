import React, { useContext } from 'react'
import { LembretesContext } from '../../common/context/lembretes'
import { ContainerAddLembrete, Formulario } from './styles';

const AdicionarLembrete = () => {
    const { pegaTexto, texto, pegaCor, corLembrete, aoEnviar } = useContext(LembretesContext);
    

    return (
        <ContainerAddLembrete>
            <h3>Adicionar Lembretes</h3>
            <span>
                Insira seu lembrete e cor personalizada de fundo nos campos abaixo e clique em enviar!
            </span>
            <Formulario onSubmit={aoEnviar}>
                <label htmlFor="lembretes">Lembrete:</label>
                <textarea
                    onChange={(event) => pegaTexto(event.target.value)}
                    value={texto}
                    type="textarea"
                    name='lembretes'
                />
                <label htmlFor="lembretes">Cor:</label>
                <input
                    onChange={(event) => pegaCor(event.target.value)}
                    value={corLembrete}
                    type='color'
                />
                <button type='submit'>Enviar</button>
            </Formulario>
        </ContainerAddLembrete>
    )
}

export default AdicionarLembrete