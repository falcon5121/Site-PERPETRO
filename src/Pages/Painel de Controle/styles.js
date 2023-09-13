import styled from 'styled-components'


export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #272626;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  margin-block: 2rem;
  transition: 200ms;

  width: 10rem;
  height: 10rem;
  z-index: 100;
  cursor: pointer;
  border-radius: 50%;

  &:hover::before {
    position: absolute;
    width: 10rem;
    height: 10rem;
    background-color: #0000004c;
    border-radius: 50%;
    transform: translate(0,-50%);
    content: "mudar foto";
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  }

  &::before {
    top: 50%;
    transform: translate(0%, -8%);
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  object-fit: cover;
`;

export const Perfil = styled.div`
  padding-block: 1rem;
  padding-inline: 2rem;

  width: 50rem;
  height: 40rem;
  border-radius: 1rem;
  background: #f1b133;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ChangeButton = styled.button`
  padding-inline: 0.2rem;
  padding-block: 0.2rem;
  background-color: #272626;
  color: #f1b133;
  position: absolute;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  left: 3.5rem;
  top: 16rem;
`

export const Label = styled.label`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: transparent;
  
  cursor:pointer; 
  position: absolute;
  left: 0;
  top:0;
  z-index:100;

  transition: all 200ms;


  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:hover::before {
    content: 'Mudar foto';
    display: flex;
    align-items: center;
    justify-content: center;
    height:10rem;
    width:10rem;
    color: #f1b133;
    font-weight: 600;
  }
`
export const FormChangeInfo = styled.form`

  width: 40rem;
  height: 30rem;
  padding-block: 1rem;
  display: flex;
  justify-content: space-evenly;
`

export const LabelInput = styled.label`
  margin-top: 0.5rem;
  color: #272626;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
export const Input = styled.input`
  
  width: 100%;
  height: 1.5rem;
  border-radius: 0.2rem;
  border: solid 2px #272626;
  outline: none;
  padding-block: 0.8rem;
  padding-inline: 0.5rem;
  background-color: #272626;
  color: #f1b133;
  font-size: 1rem;
`

export const ContainerImg = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
`

export const ContainerForm = styled.div`

width:15rem;
height: 20rem;

& > button {
  
  padding-block: 0.5rem;
  padding-inline: 0.2rem
}

`

export const H3 = styled.h3`
font-size:1.3rem;
font-weight: 600;
color: #272626;
`

export const ConfirmChange = styled.button`
  border: solid 2px #272626;
  color: #272626;
  background-color: transparent;
  margin-top: 3rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 600;
`

export const InputImg = styled.input`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  opacity: 0;
  z-index: 9;

  
  background-color: transparent;
  /* position: absolute;
  left: 0;Arquivos de Programas
  top: 0; */

`

