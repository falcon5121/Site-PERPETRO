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

const Ret = styled.div``;

const Publi = () => {
  return (
    <>
      <div>
        <ALink href="#">
          <H1>Evento de Trompete reune professores importantes do nordeste</H1>
          <P>
            Evento realizado pela ufpb acaba trazendo grandes quantidades de
            alunos inscritos
          </P>
        </ALink>
      </div>
    </>
  );
};

export default Publi;
