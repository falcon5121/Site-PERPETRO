import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Bg = styled.div`
  background-color: #161627;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warning = styled.section`
  position: absolute;
  width: 30rem;
  height: 20rem;
  background: #f1b133;
  border-radius: 1.5rem;
  text-align: center;
  line-height: 2rem;
  padding: 2rem;
`;

const Msg = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Desc = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5rem;
`;

const Btn = styled.button`
  position: absolute;
  width: 20em;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  border-radius: 1.24rem;
  border: solid 3px #161627;
  color: #161627;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: auto;
  margin-inline: auto;
  margin-bottom: 3rem;
  transition: 300ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;
function Error() {
  return (
    <>
      <Bg>
        <Warning>
          <Msg>Error 404</Msg>
          <Desc>Out of the way!</Desc>
          <Link to="/">
            <Btn>Click here to come back!</Btn>
          </Link>
        </Warning>
      </Bg>
    </>
  );
}

export default Error;
