import styled from "styled-components";
import * as Navi from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

export const NaviRoot = styled(Navi.Root)`
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

export const NaviList = styled(Navi.List)`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 2.5rem;
`;

export const NaviItem = styled(Navi.Item)`
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

export const NaviCont = styled(Navi.Content)`
  width: 10rem;
  background-color: #f1b133;
  display: block;
  padding: 0.25rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: solid 1px #282626;
  border-top: none;
`;

export const NaviTrig = styled(Navi.Trigger)`
  font-weight: 600;
  font-size: 1rem;
  width: 10rem;
  height: 2.5rem;
  background: none;
  border: none;
`;

export const LogoNm = styled.h1`
  font-family: "arial";
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  border-bottom-left-radius: ".5rem";
  border-bottom-right-radius: ".5rem";
`;

export const ListItem = styled.li`
  cursor: pointer;
  color: #282626;
  border-bottom: solid 1px #282626;
  font-weight: 600;
  padding: 0.5rem;

  &:last-child {
    border-bottom: none;
  }
`;

export const NaviLink = styled(Link)`
  display: block;
  color: #282626;
  text-decoration: none;
`;

export const Ind = styled.div`
  width: 3.75rem;
  height: 0.313rem;
  background: #272844;
  position: absolute;
  opacity: 0;
  bottom: 0.188rem;
  transition: left 300ms ease-in-out;
`;
