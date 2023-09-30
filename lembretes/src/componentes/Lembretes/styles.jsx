import styled from 'styled-components';

export const BlocoLembretes = styled.section`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 700px) {
    }
`

export const TituloLembretes = styled.h3`
    letter-spacing: 4px;
    border-bottom: 1px solid white;
    align-self: flex-start;
    border-top: 2px inset white;
    padding-top: 30px;
`

export const ContainerMasterLembretes = styled.section`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 30px;
    @media screen and (min-width: 700px) {
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`

export const ListaVazia = styled.h2`
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    @media screen and (min-width: 700px) {
        font-size: 24px;
    }
`