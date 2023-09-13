import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Posts from "../Pages/Laboratório/Publicações/Posts";

const H1 = styled.h1`
  font-size: 1.3rem;
  color: #f1b133;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2rem;
`;

const P = styled.p`
  color: #f2d486;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2rem;
`;

const ALink = styled.a`
  text-decoration: none;
  color: #f1b133;
`;

const Ret = styled.div`
  position: relative;
`;

const Edit = styled.a`
  color: #886d21;
  font-size: 2rem;
  position: absolute;
  top: 0rem;
  right: -2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
  width: 2rem;
  height: 1.6rem;
  display: ${(props) => props.admin};
  justify-content: space-around;
  align-items: center;
  ${(props) => props.estilos}

  &:active {
    outline: 3px solid #886d21;
  }
`;

const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: #886d21;
  border-radius: 100%;
`;

import store from "../store";
import { serverIp } from "../App";

export const Dots = (props) => {
  const logged = store.getState().loginAuth.value;

  return (
    <Edit
      href="#"
      admin={logged ? "flex" : "none"}
      estilos={props.estilos}
      onClick={props.function}
    >
      <Circle />
      <Circle />
      <Circle />
    </Edit>
  );
};

const Publi = (props) => {
  return (
    <>
      <Ret onClick={() => Posts(props.postId)}>
        <ALink
          href={`${serverIp}laboratorio/publicacoes/postagens/${props.postId}`}
        >
          <H1>{props.title}</H1>
          <P>{props.desc}</P>
        </ALink>
        <Dots admin={props.admin} />
      </Ret>
    </>
  );
};

export default Publi;
