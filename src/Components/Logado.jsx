import React from "react";
import styled from "styled-components";
import * as Drop from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DropRoot = styled(Drop.Root)`
  width: 10rem;
  height: 2.5rem;
  top: 0%;
  bottom: 0;
  margin-block: 1rem;
`;

const DropTrig = styled(Drop.Trigger)`
  width: 2.4rem;
  height: 2.4rem;
  
  background: none;
  border: none;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const DropCont = styled(Drop.Content)`
  width: 5.5rem;
  padding-block: 1rem;
  background-color: #ffbd38;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
`;

const DropItem = styled(Drop.Item)`
  &:hover {
    outline: none;
  }
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;

  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
`;

const LinkTo = styled(Link)`
  color: black;
  cursor: pointer;
  text-decoration: none;

`

const ImgPerf = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`


const Logado = () => {
const login = useSelector((store) => store);


  const Logout = (e) => {
    axios.get("http://localhost:3001/login/deslogar", {
      withCredentials: true,
    });
    window.location.reload(false);
  };

  return (
    <DropRoot modal={false}>
      <DropTrig>
        <ImgPerf src={`data:${login.loginAuth.value.img.contentType};base64,${login.loginAuth.value.img.data}`} alt="" />
      </DropTrig>
      <Drop.Portal>
        <DropCont>
          <DropItem>
            <Btn>
              <LinkTo to="/Painel">Meu Perfil</LinkTo>
            </Btn>
          </DropItem>
          <DropItem>
            <Btn onClick={Logout}>Sair</Btn>
          </DropItem>
        </DropCont>
      </Drop.Portal>
    </DropRoot>
  );
};

export default Logado;
