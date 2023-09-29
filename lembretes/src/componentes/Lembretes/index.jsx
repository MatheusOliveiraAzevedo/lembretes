import React, { useContext } from 'react'
import { LembretesContext } from '../../common/context/lembretes'
import { ContainerLembrete, Texto, Identificador, ContainerMasterLembretes } from './styles';
import { BiTrash } from "react-icons/bi";


const Lembretes = () => {
    const { lembretes, excluirLembrete } = useContext(LembretesContext);
  return (
    <ContainerMasterLembretes>
        <h2>Lembretes</h2>
        {lembretes.map((lembrete, index) => (
            <ContainerLembrete key={index}>
                <Texto>{lembrete.texto}</Texto>
                <Identificador>{`#: ${lembrete.id}`}</Identificador>
                <button onClick={() => excluirLembrete(lembrete.id)}><BiTrash/></button>
            </ContainerLembrete>
        ))}
    </ContainerMasterLembretes>
  )
}

export default Lembretes