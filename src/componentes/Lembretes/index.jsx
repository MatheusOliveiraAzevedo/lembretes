import React, { useContext } from 'react'
import { LembretesContext } from '../../common/context/lembretes'
import { BlocoLembretes, ContainerMasterLembretes, ListaVazia, TituloLembretes,  } from './styles';
import InfoLembretes from '../InfoLembretes';


const Lembretes = () => {
  const { lembretes, excluirLembrete, corLembrete, pegaCor } = useContext(LembretesContext);
  return (
    <BlocoLembretes>
      <TituloLembretes>Lembretes</TituloLembretes>
      <ContainerMasterLembretes>
        {lembretes.length !== 0 ? lembretes.map((lembrete, index) => (
          <InfoLembretes key={index} cor={lembrete.cor} lembrete={lembrete} />
        )) : <ListaVazia>Lista de Lembretes Vazio ainda :(</ListaVazia>}
      </ContainerMasterLembretes>
    </BlocoLembretes>
  )
}

export default Lembretes