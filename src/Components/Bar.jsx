import React, { Component } from "react";
import styled from "styled-components";
import * as Navi from "@radix-ui/react-navigation-menu";
import * as Login from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import Logado from "./Logado";
import { useEffect } from "react";

const NaviRoot = styled(Navi.Root)`
  width: 100%;
  height: 2.5rem;
  background-color: #f1b133;
  border-bottom-left-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
  display: flex;
  justify-content: space-between;
  position: ${(props) => props.posi};
  z-index: 10;
  box-shadow: 0px 12px 34px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NaviList = styled(Navi.List)`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 2.5rem;
`;

const NaviItem = styled(Navi.Item)`
  width: 10rem;
  height: 2.5rem;
  top: 0;
  bottom: 0;
  margin-block: 1rem;
  position: relative;
  ${(props) => props.more}

  &:nth-child(1):hover ~ div {
    transition: all 300ms;
    opacity: 1;
    left: 2.5rem;
    width: 5rem;
  }
  &:nth-child(2):hover ~ div {
    transition: all 300ms;
    opacity: 1;
    left: 10rem;
    width: 10rem;
  }
  &:nth-child(3):hover ~ div {
    transition: all 300ms;
    width: 6.25rem;
    opacity: 1;
    left: 21.875rem;
  }

  &:nth-child(4):hover ~ div {
    transition: all 300ms;
    opacity: 1;
    left: 30.4rem;
    width: 3.438rem;
  }

  &:nth-child(4) {
    left: 0;
    right: 0;
    margin-right: 1rem;
  }
`;

const NaviCont = styled(Navi.Content)`
  width: 10rem;
  background-color: #f1b133;
  display: block;
  padding: 0.25rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
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
`;

const LogoNm = styled.h1`
  font-family: "arial";
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  border-bottom-left-radius: ".5rem";
  border-bottom-right-radius: ".5rem";
`;

const ListItem = styled.li`
  cursor: pointer;
  color: #282626;
  border-bottom: solid 1px #282626;
  font-weight: 600;
  padding: 0.5rem;

  &:last-child {
    border-bottom: none;
  }
`;

const NaviLink = styled(Link)`
  display: block;
  color: #282626;
  text-decoration: none;
`;

const Ind = styled.div`
  width: 3.75rem;
  height: 0.313rem;
  background: #272844;
  position: absolute;
  opacity: 0;
  bottom: 0.188rem;
  transition: left 300ms ease-in-out;
`;

const LoginR = styled(Login.Root)`
  width: 10rem;
  height: 2.5rem;
`;

const LoginBtn = styled(Login.Trigger)`
  width: auto;
  margin-block: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 1rem;

  cursor: pointer;
`;

const LoginO = styled(Login.Overlay)`
  background-color: #0000005c;
  position: absolute;
  inset: 0;
`;

const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20rem;
  height: 23rem;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  padding-top: 3rem;
  padding-inline: 2rem;
`;

const LoginC = styled(Login.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20rem;
  height: 23rem;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: #f1b133;
  box-shadow: 0px 0px 17px 19px rgba(0, 0, 0, 0.1);
  animation: show 100ms ease-in-out;
  border: solid 1px #272626;

  @keyframes show {
    0% {
      top: 10%;
      opacity: 0;
    }
    10% {
      top: 15%;
      opacity: 0.2;
    }
    20% {
      top: 20%;
      opacity: 0.2;
    }
    30% {
      top: 25%;
      opacity: 0.4;
    }
    40% {
      top: 30%;
      opacity: 0.6;
    }
    50% {
      top: 35%;
      opacity: 1;
    }
    60% {
      top: 40%;
      opacity: 1;
    }
    70% {
      top: 45%;
      opacity: 1;
    }
    100% {
      top: 50%;
      opacity: 1;
    }
  }
`;

const LoginT = styled(Login.Title)`
  text-align: center;
  font-size: 2rem;
  padding-top: 1rem;
`;

const LoginDesc = styled(Login.Description)`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginClose = styled(Login.Close)`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 10rem;
  font-weight: 600;
  font-size: 1.3rem;
  border: none 0px #272844;
  cursor: pointer;
  color: #272844;
  background: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const LoginCancel = styled(Login.Close)`
  width: 5rem;
  height: 2rem;
  margin-left: 0.5rem;
  border: solid 2px #272844;
  border-radius: 0.5rem;
  background-color: #272844;
  color: white;
  cursor: pointer;

  &:hover {
    animation: hover 400ms;
  }

  @keyframes hover {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Username = styled.input`
  width: 16rem;
  height: 2.3rem;
  border-radius: 2rem;
  padding-left: 1rem;
  border: solid 2px #272844;
  outline: none;
  margin-bottom: 0.6rem;
  background-color: #282626;
  color: #f1b133;
  font-weight: 600;
  font-size: 1.1rem;

  &:first-of-type {
    margin-top: 1.5rem;
  }

  &::placeholder {
    color: ${(props) => props.color};
  }
`;

const Button = styled.button`
  width: 5rem;
  height: 2rem;
  margin-left: 0.5rem;
  border: solid 2px #272844;
  border-radius: 0.5rem;
  background-color: #272844;
  color: white;
  cursor: pointer;

  &:hover {
    animation: hover 400ms;
  }

  @keyframes hover {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Separator = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
`;

import store from "../store";
import { fetchLogin, login } from "../Redux/variavel";
import { useDispatch, useSelector } from "react-redux";

function ButtonSwitch() {
  const user = useRef(null);
  const pass = useRef(null);

  const login = useSelector((store) => store);

  const submit = async (e) => {
    e.preventDefault();
    const data = { username: user.current.value, password: pass.current.value };
    try {
      await axios
        .post("http://localhost:3001/login", data, { withCredentials: true })
        .then((e) => console.log(e))
        .catch((er) => console.log(er));

      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return store.getState().loginAuth.value == false ? (
    <LoginR modal={false}>
      <LoginBtn>Entrar</LoginBtn>
      <Login.Portal>
        <LoginO />
        <LoginC>
          <Form className="myForm">
            {/*action="http://localhost:3001/login" method="post"*/}
            <LoginT>Entrar</LoginT>
            <LoginDesc>Acesso de administrador da pagina</LoginDesc>

            <Username
              placeholder={"Usuário"}
              ref={user}
              name="username"
              id="username"
            />

            <Username
              type={"password"}
              placeholder={"Senha"}
              ref={pass}
              name="password"
              id="password"
            />
            <LoginClose>X</LoginClose>
            <Separator>
              <LoginCancel>Cancelar</LoginCancel>
              <Button type="submit" onClick={(e) => submit(e)}>
                {/*  */}
                Entrar
              </Button>
            </Separator>
          </Form>
        </LoginC>
      </Login.Portal>
    </LoginR>
  ) : (
    <Logado />
  );
}

const Bar = (props) => {
  return (
    <NaviRoot posi={props.pos == true ? "fixed" : "relative"}>
      <NaviList style={{ justifyContent: "start", paddingLeft: "30%" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "grey",
          }}
        ></div>
        <LogoNm style={{ marginLeft: "10px" }}>
          <NaviLink to="/" style={{ fontFamily: "Comfortaa" }}>
            PerPetro
          </NaviLink>
        </LogoNm>
      </NaviList>

      <NaviList>
        <NaviItem>
          <NaviTrig>Pesquisa</NaviTrig>
          <NaviCont>
            <List>
              <ListItem>
                <NaviLink to="/pesquisa/pibic">PIBIC</NaviLink>
              </ListItem>

              <ListItem>
                <NaviLink to="/pesquisa/projetos_coletivos">
                  Projetos Coletivos
                </NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/pesquisa/projetos_individuais">
                  Projetos Individuais
                </NaviLink>
              </ListItem>
            </List>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <NaviTrig>Ensino e Extensão</NaviTrig>
          <NaviCont>
            <List>
              <ListItem>
                <NaviLink to="/ensino_e_extensao/cursos">Cursos</NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/ensino_e_extensao/oficinas">Oficinas</NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/ensino_e_extensao/probex">Probex</NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/ensino_e_extensao/prolicen">Prolicen</NaviLink>
              </ListItem>
            </List>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <NaviTrig>Laboratório</NaviTrig>
          <NaviCont>
            <List>
              <ListItem>
                <NaviLink to="/laboratorio/apresentacao">Apresentação</NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/laboratorio/quem_somos">Quem Somos?</NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/laboratorio/publicacoes">Publicações</NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/laboratorio/agenda">Agenda</NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/laboratorio/recursos_digitais">
                  Recursos Digitais
                </NaviLink>
              </ListItem>
              <ListItem>
                <NaviLink to="/laboratorio/parcerias">Parcerias</NaviLink>
              </ListItem>
            </List>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <ButtonSwitch />
        </NaviItem>
        <Ind />
      </NaviList>
    </NaviRoot>
  );
};

export default Bar;
