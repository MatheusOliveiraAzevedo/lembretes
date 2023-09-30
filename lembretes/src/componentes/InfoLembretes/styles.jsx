import styled from "styled-components"


export const ContainerLembrete = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: none;
    gap: 5px;
    padding: 40px 20px 20px 20px;
    background-color: ${props => props.$cor};
    box-shadow: 5px 5px 20px black;
    border-radius: 20px;
    @media screen and (min-width: 700px){
        width: 300px;
        height: auto;
    }
`

export const Texto = styled.p`
    font-family: 'Josefin Sans', sans-serif;
`

export const Identificador = styled.h4`
    font-size: 10px;
    position: absolute;
    top: 5px;
    left: 20px;
`

export const BotaoExcluir = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 0;
    margin: 0;
    background-color: inherit;
    border: none;
`

export const BotaoCor = styled.input`
    position: absolute;
    bottom: 10px;
    right: 20px;
    border: none;
    padding: 0;
    margin: 0;
`