import React from "react";
import LogoPerpetro from "../../public/logo/logoPerpetro.png";
import {
  Align,
  ContentList,
  Div,
  FUl,
  Flink,
  Footer,
  LabelList,
  LogoNm,
} from "./FooterCss";
const RodaPe = (props) => {
  return (
    <Footer sty={props.sty}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={LogoPerpetro}
          style={{
            width: "130px",
            height: "130px",
            marginLeft: "70px",
            marginRight: "10px",
            top: "0",
            bottom: "0",
            marginBlock: "auto",
          }}
        />
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
