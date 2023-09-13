import React from "react";
import ButtonSwitch from "./Modal/Modal.jsx";
import pereptroLogo from "../../public/logo/logoPerpetro.png";
import {
  Ind,
  List,
  ListItem,
  LogoNm,
  NaviCont,
  NaviItem,
  NaviLink,
  NaviList,
  NaviRoot,
  NaviTrig,
} from "./BarCss";

const Bar = (props) => {
  if (
    !localStorage.getItem("user_credentials") ||
    localStorage.getItem("user_credentials").length <= 0
  ) {
    console.log("Não tem ninguem logado");
  }

  return (
    <NaviRoot posi={props.pos == true ? "fixed" : "relative"}>
      <NaviList style={{ justifyContent: "start", paddingLeft: "30%" }}>
        {/* <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "grey",
          }}
        ></div> */}
        <img src={pereptroLogo} style={{ height: "4rem", width: "4rem" }} />
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
