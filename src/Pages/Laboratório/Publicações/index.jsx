import React from "react";
import styled from "styled-components";
import Bar from "../../../Components/Bar";
import { Link } from "react-router-dom";

import Center from "../../../Components/Center";

import { Body } from "../../../styles/Styles";

import Footer from "../../../Components/Footer";

import Publi from "../../../Components/Publi";
import MobiNav from "../../../Components/MobiNav";

const Cor = styled.div`
  width: 100%;
  background-color: #272844;
  height: 100vh;
`;

export const ListPubli = styled.section`
  width: 30rem;
  margin-top: 2rem;
  padding-right: 2rem;
  height: 95%;
  white-space: nowrap;
  overflow: hidden;
`;

const TextP = styled.h1`
  font-size: 2rem;
  color: #f1b133;
  font-weight: 600;
`;

export default function () {
  return (
    <Cor>
      <Bar posi="false" />
      <MobiNav />
      <Body
        color="#272844"
        vezes="2"
        estilos={"display: flex; justify-content: center"}
      >
        <Center>
          <TextP>Todas as Publicações</TextP>
          <ListPubli>
            <Publi />
            <Publi />
            <Publi />
            <Publi />
          </ListPubli>
        </Center>
      </Body>
      <Footer />
    </Cor>
  );
}
