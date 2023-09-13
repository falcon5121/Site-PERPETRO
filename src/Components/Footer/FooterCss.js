import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentList = styled.aside`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  margin-right: 2rem;
  height: 11rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FUl = styled.ul`
  list-style: none;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 12.6rem;
  background-color: #f1b133;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.sty}
`;

export const Flink = styled(Link)`
  font-weight: 500;
  color: #282626;
  text-decoration: none;
`;

export const Div = styled.div`
  width: 2px;
  height: 7rem;
  background-color: #282626;
  margin-block: auto;
`;

export const LabelList = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

export const Align = styled.p`
  text-align: center;
  line-height: 1.5rem;
`;

export const LogoNm = styled.span`
  font-size: 2rem;
  font-family: "Comfortaa";
  font-weight: bold;
`;
