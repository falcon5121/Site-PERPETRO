import React from "react";
import styled from "styled-components";
import * as Navi from "@radix-ui/react-navigation-menu";
import * as Login from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";

import {
  faMagnifyingGlass,
  faBook,
  faMusic,
  faRightToBracket,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const NaviRoot = styled(Navi.Root)`
  width: 100%;
  height: 6rem;
  background-color: #f1b133;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  display: none;
  border-top: solid 1px #272626;
  transition: all 100ms;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NaviList = styled(Navi.List)`
  width: 100%;
  height: 6rem;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
`;

const NaviItem = styled(Navi.Item)`
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  display: block;
  border: none;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
  transition: 200ms all;

  &:active {
    transform: scale(0.9);
  }
`;

const NaviTrig = styled(Navi.Trigger)`
  color: #272626;
  background-color: transparent;
  border: none;
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
`;

const Home = styled(Link)`
  color: #272626;
  background-color: transparent;
  border: none;
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NaviCont = styled(Navi.Content)`
  position: relative;
  bottom: ${(props) => props.distancia};
  background-color: #f1b133;
  width: 8rem;
  left: -2rem;
  padding-block: 1rem;
  border-radius: 0.8rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.li`
  list-style: none;
`;

const LinkItem = styled(Link)`
  color: #272626;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  display: block;
  padding-block: 0.3rem;
  border-bottom: solid 1px #272626;
`;

const List = styled.ul``;

const Svg = styled.svg`
  position: absolute;
  transform: rotate(0.5turn);
  left: 0;
  right: 0;
  margin: auto;
  bottom: -1.2rem;
  z-index: -1;
`;

const MobiNav = (props) => {
  const barra = useRef(null);

  // window.addEventListener("scroll", (e) => {
  //   if (barra.current) {
  //     if (e.path[1].scrollY >= props.amount) {
  //       barra.current.style.bottom = "-6rem";
  //     } else {
  //       barra.current.style.bottom = "0";
  //     }
  //   }
  // });

  return (
    <NaviRoot ref={barra}>
      <NaviList>
        <NaviItem>
          <NaviTrig>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={"2x"} />
          </NaviTrig>
          <NaviCont distancia="16.7rem">
            <List>
              <Svg
                style={{}}
                width="62"
                height="55"
                viewBox="0 0 62 55"
                fill="#fac251"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_58_34)">
                  <path
                    d="M51.8468 41.5H10.1313C5.4718 41.5 3.33916 35.6932 6.89106 32.6774L13.0984 27.407C19.4997 21.972 23.8125 14.4806 25.2983 6.21572L25.421 5.53312C26.481 -0.363012 34.9687 -0.270285 35.8996 5.6476C37.2523 14.2468 41.724 22.0469 48.4613 27.5592L54.933 32.8543C58.4779 35.7546 56.427 41.5 51.8468 41.5Z"
                    stroke="none"
                    shape-rendering="geometricPrecision"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_58_34"
                    x="0.614014"
                    y="0.65979"
                    width="60.6172"
                    height="49.3402"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_58_34"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_58_34"
                      result="shape"
                    />
                  </filter>
                </defs>
              </Svg>
              <ListItem>
                <LinkItem to={"/pesquisa/pibic"}>PIBIC</LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem to={"/pesquisa/projetos_coletivos"}>
                  Projetos Coletivos
                </LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem to={"/pesquisa/projetos_individuais"}>
                  Projetos Individuais
                </LinkItem>
              </ListItem>
            </List>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <NaviTrig>
            <FontAwesomeIcon icon={faBook} size={"2x"} />
          </NaviTrig>
          <NaviCont distancia="16.2rem">
            <Svg
              style={{}}
              width="62"
              height="55"
              viewBox="0 0 62 55"
              fill="#fac251"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_58_34)">
                <path
                  d="M51.8468 41.5H10.1313C5.4718 41.5 3.33916 35.6932 6.89106 32.6774L13.0984 27.407C19.4997 21.972 23.8125 14.4806 25.2983 6.21572L25.421 5.53312C26.481 -0.363012 34.9687 -0.270285 35.8996 5.6476C37.2523 14.2468 41.724 22.0469 48.4613 27.5592L54.933 32.8543C58.4779 35.7546 56.427 41.5 51.8468 41.5Z"
                  stroke="none"
                  shape-rendering="geometricPrecision"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_58_34"
                  x="0.614014"
                  y="0.65979"
                  width="60.6172"
                  height="49.3402"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_58_34"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_58_34"
                    result="shape"
                  />
                </filter>
              </defs>
            </Svg>
            <ListItem>
              <LinkItem to={"/ensino_e_extensao/cursos"}>Cursos</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/ensino_e_extensao/Oficinas"}>Oficinas</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/ensino_e_extensao/Prolicen"}>Prolicen</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/ensino_e_extensao/Probex"}>Probex</LinkItem>
            </ListItem>
          </NaviCont>
        </NaviItem>

        <NaviItem>
          <NaviTrig>
            <FontAwesomeIcon icon={faMusic} size={"2x"} />
          </NaviTrig>
          <NaviCont distancia="22.7rem">
            <Svg
              style={{}}
              width="62"
              height="55"
              viewBox="0 0 62 55"
              fill="#fac251"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_58_34)">
                <path
                  d="M51.8468 41.5H10.1313C5.4718 41.5 3.33916 35.6932 6.89106 32.6774L13.0984 27.407C19.4997 21.972 23.8125 14.4806 25.2983 6.21572L25.421 5.53312C26.481 -0.363012 34.9687 -0.270285 35.8996 5.6476C37.2523 14.2468 41.724 22.0469 48.4613 27.5592L54.933 32.8543C58.4779 35.7546 56.427 41.5 51.8468 41.5Z"
                  stroke="none"
                  shape-rendering="geometricPrecision"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_58_34"
                  x="0.614014"
                  y="0.65979"
                  width="60.6172"
                  height="49.3402"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_58_34"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_58_34"
                    result="shape"
                  />
                </filter>
              </defs>
            </Svg>
            <ListItem>
              <LinkItem to={"/laboratorio/Apresentacao"}>Apresentação</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/laboratorio/quem_somos"}>Quem somos?</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/laboratorio/publicacoes"}>Publicações</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/laboratorio/agenda"}>Agenda</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/laboratorio/recursos_digitais"}>
                Recursos Digitais
              </LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to={"/laboratorio/parcerias"}>Parcerias</LinkItem>
            </ListItem>
          </NaviCont>
        </NaviItem>
        <NaviItem>
          <Home to={"/"}>
            <FontAwesomeIcon icon={faHouse} size={"2x"} />
          </Home>
        </NaviItem>
      </NaviList>
    </NaviRoot>
  );
};

export default MobiNav;
