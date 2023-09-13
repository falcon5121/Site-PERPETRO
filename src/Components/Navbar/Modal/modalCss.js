import styled from "styled-components";
import * as Login from "@radix-ui/react-dialog";

export const LoginBtn = styled(Login.Trigger)`
  width: auto;
  margin-block: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 1rem;
`;

export const LoginO = styled(Login.Overlay)`
  background-color: #0000005c;
  position: absolute;
  inset: 0;
`;

export const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20rem;
  height: 23rem;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  padding-top: 3rem;
  padding-inline: 2rem;
`;

export const LoginC = styled(Login.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20rem;
  height: 23rem;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: #f1b133;
  box-shadow: 0px 0px 17px 19px rgba(0, 0, 0, 0.1);
  animation: show 100ms ease-in-out;
  border: solid 1px #272626;

  @keyframes show {
    0% {
      top: 10%;
      opacity: 0;
    }
    10% {
      top: 15%;
      opacity: 0.2;
    }
    20% {
      top: 20%;
      opacity: 0.2;
    }
    30% {
      top: 25%;
      opacity: 0.4;
    }
    40% {
      top: 30%;
      opacity: 0.6;
    }
    50% {
      top: 35%;
      opacity: 1;
    }
    60% {
      top: 40%;
      opacity: 1;
    }
    70% {
      top: 45%;
      opacity: 1;
    }
    100% {
      top: 50%;
      opacity: 1;
    }
  }
`;

export const LoginT = styled(Login.Title)`
  text-align: center;
  font-size: 2rem;
  padding-top: 1rem;
`;

export const LoginDesc = styled(Login.Description)`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const LoginClose = styled(Login.Close)`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 10rem;
  font-weight: 600;
  font-size: 1.3rem;
  border: none 0px #272844;
  cursor: pointer;
  color: #272844;
  background: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const LoginCancel = styled(Login.Close)`
  width: 5rem;
  height: 2rem;
  margin-left: 0.5rem;
  border: solid 2px #272844;
  border-radius: 0.5rem;
  background-color: #272844;
  color: white;
  cursor: pointer;

  &:hover {
    animation: hover 400ms;
  }

  @keyframes hover {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Username = styled.input`
  width: 16rem;
  height: 2.3rem;
  border-radius: 2rem;
  padding-left: 1rem;
  border: solid 2px #272844;
  outline: none;
  margin-bottom: 0.6rem;
  background-color: #282626;
  color: #f1b133;
  font-weight: 600;
  font-size: 1.1rem;

  &:first-of-type {
    margin-top: 1.5rem;
  }

  &::placeholder {
    color: ${(props) => props.color};
  }
`;

export const Button = styled.button`
  width: 5rem;
  height: 2rem;
  margin-left: 0.5rem;
  border: solid 2px #272844;
  border-radius: 0.5rem;
  background-color: #272844;
  color: white;
  cursor: pointer;

  &:hover {
    animation: hover 400ms;
  }

  @keyframes hover {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Separator = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
`;

export const LoginR = styled(Login.Root)`
  width: 10rem;
  height: 2.5rem;
`;

export const Msg = styled.p`
  color: #880808;
  position: absolute;
  top: 45%;
  font-size: 0.75rem;
  display: ${(props) => props.display};
`;
