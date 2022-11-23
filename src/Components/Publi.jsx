import React from "react";
import styled from "styled-components";

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

const Publi = (props) => {
  return (
    <>
      <Ret>
        <ALink href="#">
          <H1>Evento de Trompete reune professores importantes do nordeste</H1>
          <P>
            Evento realizado pela ufpb acaba trazendo grandes quantidades de
            alunos inscritos
          </P>
        </ALink>
        <Edit href="#" admin={props.admin ? "flex" : "none"}>
          <Circle />
          <Circle />
          <Circle />
        </Edit>
      </Ret>
    </>
  );
};

export default Publi;
