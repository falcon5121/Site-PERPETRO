import React from "react";
import styled from "styled-components";

const Lateral = styled.aside`
  width: 15rem;
  height: 60rem;
  background-color: #282626;
  margin-block: auto;
  transform: translateX(-1rem);
  border-radius: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LastNew = styled.h1`
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: #f1b133;
`;

const Noticia = styled.section`
  width: 13rem;
  height: 8rem;
  margin-inline: auto;
  border-radius: 1rem;
  border: solid 1px #4a4848;
  padding: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Div = styled.div`
  background: #cfcfcf;
  width: 12rem;
  height: 5rem;
  border-radius: 0.5rem;
`;

const P = styled.p`
  color: #f1b133;

  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ALink = styled.a`
  text-decoration: none;
  color: #f1b133;
`;

const Card = (props) => {
  return (
    <>
      <ALink href="/">
        <Noticia>
          <Div></Div>
          <P>{props.children}</P>
        </Noticia>
      </ALink>
    </>
  );
};

const Aside = () => {
  return (
    <Lateral>
      <LastNew>Ultimas Notícias</LastNew>

      <Card children="Testando algo sobre as funcionalidades" />
      <Card children="Testando algo sobre as funcionalidades" />
      <Card children="Testando algo sobre as funcionalidades" />
      <Card children="Testando algo sobre as funcionalidades" />
      <Card children="Testando algo sobre as funcionalidades" />
      <Card children="Testando algo sobre as funcionalidades" />
    </Lateral>
  );
};
