import React from "react";
import styled from "styled-components";
import Bar from "../../../Components/Bar";
import { Link } from "react-router-dom";

import Center from "../../../Components/Center";

import { Body } from "../../../styles/Styles";

import Footer from "../../../Components/Footer";

import Publi from "../../../Components/Publi";
import MobiNav from "../../../Components/MobiNav";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cor = styled.div`
  width: 100%;
  background-color: #272844;
  height: 100%;
`;

export const ListPubli = styled.section`
  width: 36rem;
  margin-top: 2rem;
  padding-right: 6rem;
  padding-top: 4rem;
  height: 95%;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextP = styled.h1`
  font-size: 2rem;
  color: #f1b133;
  font-weight: 600;
`;

const Btn = styled.a`
  position: absolute;
  right: 1rem;
  top: 5rem;
  padding: 0.3rem;
  color: #f1b133;
  background: transparent;
  border: solid 1px #f1b133;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 200ms ease-in-out;
  font-size: 0.8rem;
  text-decoration: none;

  &:active {
    transform: scale(0.99);
  }
`;

export default function () {
  return (
    <Cor>
      <Bar posi="false" />
      <MobiNav amount="600" />
      <Body
        color="#272844"
        vezes="2"
        estilos={"display: flex; justify-content: center, padding: 0"}
      >
        <Center>
          <TextP>Todas as Publicações</TextP>
          <Btn href="#">
            Adicionar Nova Publicação &nbsp; <FontAwesomeIcon icon={faPlus} />
            &nbsp;
          </Btn>
          <ListPubli>
            <Publi admin="flex" />
            <Publi admin="flex" />
            <Publi admin="flex" />
            <Publi admin="flex" />
          </ListPubli>
        </Center>
      </Body>
      <Footer />
    </Cor>
  );
}
