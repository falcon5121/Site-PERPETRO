import styled from "styled-components";
import * as Drop from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export const DropRoot = styled(Drop.Root)`
  width: 10rem;
  height: 2.5rem;
  top: 0%;
  bottom: 0;
  margin-block: 1rem;
`;
export const DropTrig = styled(Drop.Trigger)`
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
export const DropCont = styled(Drop.Content)`
  width: 5.5rem;
  padding-block: 1rem;
  background-color: #ffbd38;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
`;
export const DropItem = styled(Drop.Item)`
  &:hover {
    outline: none;
  }
`;
export const Btn = styled.button`
  background-color: transparent;
  border: none;

  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
`;
export const LinkTo = styled(Link)`
  color: black;
  cursor: pointer;
  text-decoration: none;
`;
export const ImgPerf = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
