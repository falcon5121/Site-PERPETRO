import styled from "styled-components";

export const Cor = styled.div`
  width: 100%;
  background-color: #272844;
  height: 100%;
`;

export const TextP = styled.h1`
  font-size: 2rem;
  color: #f1b133;
  font-weight: 600;
`;

export const Btn = styled.a`
  position: absolute;
  right: 1rem;
  top: 5rem;
  padding: 0.3rem;
  color: #f1b133;
  background: transparent;
  border: solid 1px #f1b133;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 200ms ease-in-out;
  font-size: 0.8rem;
  text-decoration: none;
  display: ${(props) => props.visivel};

  &:active {
    transform: scale(0.99);
  }
`;
