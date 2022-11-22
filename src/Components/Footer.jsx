import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContentList = styled.aside`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  margin-right: 2rem;
  height: 11rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FUl = styled.ul`
  list-style: none;
`;

const Footer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #f1b133;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.sty}
`;

const Flink = styled(Link)`
  font-weight: 500;
  color: #282626;
  text-decoration: none;
`;

const Div = styled.div`
  width: 2px;
  height: 7rem;
  background-color: #282626;
  margin-block: auto;
`;

const LabelList = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const Align = styled.p`
  text-align: center;
  line-height: 1.5rem;
`;

const LogoNm = styled.span`
  font-size: 2rem;
  font-family: "Comfortaa";
  font-weight: bold;
`;

const RodaPe = (props) => {
  return (
    <Footer sty={props.sty}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#cfcfcf",
            marginLeft: "70px",
            marginRight: "10px",
            top: "0",
            bottom: "0",
            marginBlock: "auto",
          }} /* ISSO SERA UMA FOTO */
        ></div>{" "}
        <LogoNm>PerPetro</LogoNm>
      </div>

      <ContentList>
        <FUl>
          <LabelList>Pesquisa</LabelList>
          <li>
            <Flink to="/pesquisa/pibic">
              <Align>PIBIC</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/pesquisa/projetos_individuais">
              <Align>Projetos Individuais</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/pesquisa/projetos_coletivos">
              <Align>Projetos Coletivos</Align>
            </Flink>
          </li>
        </FUl>
        <Div />
        <FUl>
          <LabelList>Ensino e Extensão</LabelList>
          <li>
            <Flink to="/ensino_e_extensao/cursos">
              <Align>Cursos</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/ensino_e_extensao/oficinas">
              <Align>Oficinas</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/ensino_e_extensao/probex">
              <Align>Probex</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/ensino_e_extensao/prolicen">
              <Align>Prolicen</Align>
            </Flink>
          </li>
        </FUl>
        <Div />
        <FUl>
          <LabelList>Laboratório</LabelList>
          <li>
            <Flink to="/laboratorio/apresentacao">
              <Align>Apresentação</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/laboratorio/quem_somos">
              <Align>Quem Somos?</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/laboratorio/publicacoes">
              <Align>Publicações</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/laboratorio/agenda">
              <Align>Agenda</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/laboratorio/recursos_digitais">
              <Align>Recursos Digitais</Align>
            </Flink>
          </li>
          <li>
            <Flink to="/laboratorio/parcerias">
              <Align>Parcerias</Align>
            </Flink>
          </li>
        </FUl>
      </ContentList>
    </Footer>
  );
};

export default RodaPe;
