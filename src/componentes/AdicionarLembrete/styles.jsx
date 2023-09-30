import styled from "styled-components";

export const ContainerAddLembrete = styled.section`
    display: flex;
    flex-direction: column;
    h3{
        letter-spacing: 4px;
        font-size: 20px;
        border-bottom: 1px solid white;
        align-self: flex-start;
    }
    span {
        margin: 20px 0;
        text-align: center;
    }
    @media screen and (min-width: 700px){
        width: 50%;
        h3{

        }
        span{

        }
    }
`

export const Formulario = styled.form`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    label{
        margin-right: 10px;
    }
    textarea{
        margin: 10px 0;
    }
    input{
        margin: 10px 0;
    }
    button{
        grid-column: span 2;
        border: none;
        padding: 10px 0;
        margin-top: 10px;
    }
    @media screen and (min-width: 700px){

    }
`