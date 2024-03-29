import React from "react";
import styled from "styled-components";
import Bar from "../../../Components/Navbar/Bar";

import Center from "../../../Components/Center";

import { Body } from "../../../styles/Styles";

import Footer from "../../../Components/Footer/Footer";

import Publi from "../../../Components/Publ";
import MobiNav from "../../../Components/MobiNav";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { useEffect, useState } from "react";

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

export const Cor = styled.div`
  width: 100%;
  background-color: #272844;
  height: 100%;
`;

export const TextP = styled.h1`
  font-size: 2rem;
  color: #f1b133;
  font-weight: 600;
`;

export const Btn = styled.a`
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
  display: ${(props) => props.visivel};

  &:active {
    transform: scale(0.99);
  }
`;

import { serverIp } from "../../../App";

export default function () {
  const [dados, setDados] = useState([""]);

  const valor = localStorage.key("user_credentials");

  useEffect(() => {
    if (!dados == [""]) {
      axios
        .get(`${serverIp}/postagens`)
        .then((e) => setDados(e.data))
        .catch((err) => console.log(err));
    }
  }, []);

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
          <Btn href="/editor" visivel={valor == true ? "inherit" : "none"}>
            Adicionar Nova Publicação &nbsp; <FontAwesomeIcon icon={faPlus} />
            &nbsp;
          </Btn>
          <ListPubli>
            {!dados == [""] ? (
              dados.map((index, indice) => {
                return (
                  <Publi
                    key={indice}
                    postId={indice}
                    admin="flex"
                    title={index.tittle}
                    desc={index.subTittle}
                  />
                );
              })
            ) : (
              <></>
            )}
          </ListPubli>
        </Center>
      </Body>
      <Footer />
    </Cor>
  );
}
