import React from "react";
import { Body, Content } from "../../styles/Styles";
import Bar from "../../Components/Bar";
import MobiNav from "../../Components/MobiNav";
import axios from "axios";
import styled from "styled-components";
import { useRef } from "react";

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  margin-block: 2rem;
  transition: 200ms;

  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 10;

  /* &::before {
    content: "mudar foto ";
    left: 30%;
    top: 50%;
    transform: translate(-10%, -50%);
    position: absolute;
    color: white;
  } */

  &:hover::before {
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    content: "mudar foto";
    text-align: center;
    color: #bababa;
  }
  &:hover {
    background: #00000060;
    cursor: pointer;
  }

  &::before {
    top: 50%;
    transform: translate(0%, -8%);
  }
`;

const Img = styled.img``;

const Perfil = styled.div`
  padding-block: 1rem;
  padding-inline: 2rem;

  width: 50rem;
  height: 40rem;
  border-radius: 2rem;
  background: #f1b133;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Tentativa = async () => {
  const response = axios.get("http://localhost:3001/login", {
    withCredentials: true,
  });

  return response.then((e) => {
    if (e.data) {
      return true;
    }
  });
};

const Painel = () => {
  const img = useRef(null);
  console.log(Tentativa());

  const mudarFoto = () => {
    console.log(img);
  };
  return (
    <>
      <Bar posi="false" />
      <MobiNav amount="40" />
      <Body color="#272844" vezes="1" estilos={"position: absolute"}>
        <Perfil>
          <H1>Meu Perfil</H1>
          <Container>
            <Img
              src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png"
              onClick={mudarFoto}
            />
          </Container>
        </Perfil>
      </Body>
    </>
  );
};

export default Painel;
