import styled from "styled-components";
import Lottie from "lottie-react";

export const Back = styled.main`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: #f1b133;
  display: ${(props) => props.desaparecer};
  opacity: ${(props) => props.opacity};

  transition: all 300ms;
`;

export const AnimationTpt = styled(Lottie)`
  width: 20rem;
  height: 20rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 22;
  backdrop-filter: blur(10px);
`;
export const Shadow = styled.div`
  opacity: 0.1;

  width: 10rem;
  height: 10rem;
  background-color: #262844;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 20;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;
