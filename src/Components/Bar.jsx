import React from "react";
import styled from "styled-components";
import * as Navi from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

const Bar = () => {
  const NaviRoot = styled(Navi.Root)`
    width: 100%;
    height: 2.5rem;
    background-color: #f1b133;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
  `;

  const NaviList = styled(Navi.List)`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30rem;
    background: red;
  `;

  const NaviItem = styled(Navi.Item)`
    width: 10rem;
    height: 2.5rem;
    color: blue;
  `;

  const NaviCont = styled(Navi.Content)`
    width: 10rem;
    background-color: #f1b133;
    display: block;
    padding: 0.25rem;
    border-bottom: solid 1px #7e7575;
    border-inline: solid 1px #282626;
  `;

  const NaviTrig = styled(Navi.Trigger)`
    width: 10rem;
    height: auto;
    background: none;
    border: none;
  `;

  const LogoNm = styled.h1`
    font-family: "arial";
  `;

  return (
    <NaviRoot>
      <NaviList style={{ justifyContent: "start", paddingLeft: "30%" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "grey",
          }}
        ></div>
        <LogoNm>PerPetro</LogoNm>
      </NaviList>

      <NaviList>
        <NaviItem>
          <NaviTrig>Pesquisa</NaviTrig>
          <NaviCont>
            <Navi.Link href="/pesquisa/pibic">PIBIC</Navi.Link>
          </NaviCont>
          <NaviCont>
            <Link>Projetos Coletivos</Link>
          </NaviCont>
          <NaviCont
            style={{
              borderBottomLeftRadius: ".5rem",
              borderBottomRightRadius: ".5rem",
            }}
          >
            <Link>Projetos Individuais</Link>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <NaviTrig>Ensino e Extensão</NaviTrig>
          <NaviCont>Cursos</NaviCont>
          <NaviCont>Oficinas</NaviCont>
          <NaviCont>Prolicen</NaviCont>
          <NaviCont
            style={{
              borderBottomLeftRadius: ".5rem",
              borderBottomRightRadius: ".5rem",
            }}
          >
            Probex
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <NaviTrig>Laboratório</NaviTrig>
          <NaviCont>Apresentação</NaviCont>
          <NaviCont>Quem somos?</NaviCont>
          <NaviCont>Publicações</NaviCont>
          <NaviCont>Agenda</NaviCont>
          <NaviCont>Recursos Digitais</NaviCont>
          <NaviCont
            style={{
              borderBottomLeftRadius: ".5rem",
              borderBottomRightRadius: ".5rem",
            }}
          >
            Parcerias
          </NaviCont>
        </NaviItem>
      </NaviList>
    </NaviRoot>
  );
};

export default Bar;
