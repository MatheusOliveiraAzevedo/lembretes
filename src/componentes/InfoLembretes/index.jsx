import { useContext } from 'react';
import { BotaoCor, BotaoExcluir, ContainerLembrete, Identificador, Texto } from './styles';
import { BiTrash } from "react-icons/bi";
import { LembretesContext } from '../../common/context/lembretes';

const InfoLembretes = ({ lembrete, cor }) => {

    const { trocaCor, excluirLembrete } = useContext(LembretesContext);

    return (
            <ContainerLembrete $cor={cor} >
                    <Texto>{lembrete.texto}</Texto>
                    <Identificador>{`#: ${lembrete.id}`}</Identificador>
                    <BotaoExcluir onClick={() => excluirLembrete(lembrete.id)}><BiTrash /></BotaoExcluir>
                    <BotaoCor onChange={(event) => trocaCor(event.target.value, lembrete)} type='color' value={lembrete.cor}></BotaoCor>
                </ContainerLembrete>
    )
}

export default InfoLembretes