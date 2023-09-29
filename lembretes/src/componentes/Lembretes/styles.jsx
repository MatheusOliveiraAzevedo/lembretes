import styled from 'styled-components';

export const ContainerMasterLembretes = styled.section`
    display: flex;
    flex-direction: column;
    `

export const ContainerLembrete = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 2px solid green;
    gap: 5px;
    margin: 10px 0;
    padding: 40px 20px 20px 20px;
    background-color: #aeaf93;
    button {
        position: absolute;
        top: 10px;
        right: 20px;
        padding: 0;
        margin: 0;
        background-color: inherit;
        border: none;
    }
`

export const Texto = styled.p`
    
`

export const Identificador = styled.h4`
    font-size: 10px;
    position: absolute;
    top: 5px;
    left: 20px;
`
