import React from "react";
import styled from "styled-components";
import * as Navi from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

const Bar = () => {
  const NaviRoot = styled(Navi.Root)`
    

    & h1 {
      font-family: 'Comfortaa';
      font-weight: 700;
    }


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
    justify-content: center;
    width: 30rem;
    height: 2.5rem;
  `;

  const NaviItem = styled(Navi.Item)`
    width: 10rem;
    height: 2.5rem;
    color: blue;
    top: 0%;
    bottom: 0;
    margin-block: 1rem;
    position: relative;
  `;

  const NaviCont = styled(Navi.Content)`
    width: 10rem;
    background-color: #f1b133;
    display: block;
    padding: 0.25rem;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    border: solid 1px #282626;
    border-top: none;
    
  `;

  const NaviTrig = styled(Navi.Trigger)`
    font-weight: 600;
    font-size: 1rem;
    width: 10rem;
    height: 2.5rem;
    background: none;
    border: none;
    background-color: blue;
  `;

  const LogoNm = styled.h1`

    font-family: "arial";
    cursor: pointer;
  `;

  const List = styled.ul`
    list-style: none;
    border-bottom-left-radius: ".5rem";
    border-bottom-right-radius: ".5rem";
  `

  const ListItem = styled.li`
    cursor: pointer;
    color: #282626;
    border-bottom: solid 1px #282626;
    font-weight: 600;
    padding: .5rem;

    &:last-child {
      border-bottom: none;
    }
  `
  const NaviLink = styled(Navi.Link)`
    color: #282626;
    text-decoration: none;
  `
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
        <LogoNm style={{marginLeft:'10px'}}><NaviLink href='/'>PerPetro</NaviLink></LogoNm>
      </NaviList>

      <NaviList>
        <NaviItem>
          <NaviTrig>Pesquisa</NaviTrig>
          <NaviCont>
            <ListItem><NaviLink href="/pesquisa/pibic">PIBIC</NaviLink></ListItem>
            <ListItem><NaviLink href="/pesquisa/projetos_coletivos">Projetos Coletivos</NaviLink></ListItem>
            <ListItem><NaviLink href="/pesquisa/projetos_individuais">Projetos Individuais</NaviLink></ListItem>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <NaviTrig>Ensino e Extensão</NaviTrig>
          <NaviCont>
            <List>
              <ListItem><NaviLink href="/ensino_e_extensao/cursos">Cursos</NaviLink></ListItem>
              <ListItem><NaviLink href="/ensino_e_extensao/oficinas">Oficinas</NaviLink></ListItem>
              <ListItem><NaviLink href="/ensino_e_extensao/probex">Probex</NaviLink></ListItem>
              <ListItem><NaviLink href="/ensino_e_extensao/prolicen">Prolicen</NaviLink></ListItem>
            </List>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <NaviTrig>Laboratório</NaviTrig>
          <NaviCont>
            <ListItem><NaviLink href="/laboratorio/apresentacao">Apresentação</NaviLink></ListItem>
            <ListItem><NaviLink href="/laboratorio/quem_somos">Quem Somos?</NaviLink></ListItem>
            <ListItem><NaviLink href="/laboratorio/publicacoes">Publicações</NaviLink></ListItem>
            <ListItem><NaviLink href="/laboratorio/agenda">Agenda</NaviLink></ListItem>
            <ListItem><NaviLink href="/laboratorio/recursos_digitais">Recursos Digitais</NaviLink></ListItem>
            <ListItem><NaviLink href="/laboratorio/parcerias">Parcerias</NaviLink></ListItem>
          </NaviCont>
          
        </NaviItem>
      </NaviList>
    </NaviRoot>
  );
};

export default Bar;
