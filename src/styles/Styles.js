import styled from "styled-components"




export const Body = styled.main`
    width: 100%;
    height: calc(${props => props.vezes} * 700px);
    background-color: ${ props => props.color};
    ${props => props.estilos};
    
    /* @media (max-width: 768px) {
        padding-bottom: 1.6rem;
        
    } */
`

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
    flex-direction: column;
  }

`

export const CaixaTexto = styled.article`
    font-family: 'Arial';
    width: 33.75rem;
    height: 33.75rem;
    margin: 4.375rem;

    @media (max-width: 768px) {
        margin-inline: 3.5rem;
        width: 85%;
        height: 40rem;
        
    }
`

export const Text = styled.h1`
        font-family: 'Comfortaa';
        font-weight: 700;
        font-size: 1.8rem;
        margin-bottom: 1rem;
        letter-spacing: .3rem;
        width: 10rem;
        color: white;

        padding-bottom: 0.75rem;
        border-bottom: solid 3px #F1B133;

        
`

export const Content = styled.p`
        color: white;
        font-size: 1.15rem;
        font-weight: 300;
`

