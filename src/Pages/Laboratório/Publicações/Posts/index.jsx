import React, { useState } from "react";
import { Body } from "../../../../styles/Styles";
import Bar from "../../../../Components/Navbar/Bar";
import MobiNav from "../../../../Components/MobiNav";
import Center from "../../../../Components/Center";
import Footer from "../../../../Components/Footer/Footer";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { serverIp } from "../../../../App";

const TextP = styled.h1`
  font-size: 2rem;
  color: #f1b133;
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

const Sub = styled.h4`
  color: #f1b133;
  font-weight: 500;
  font-style: italic;
  font-size: 1.2rem;
`;
const Date = styled.h5`
  color: #f1b133;
  font-weight: 400;
  font-style: italic;
  float: right;
`;

const Box = styled.main`
  width: 100%;
  height: 90%;

  color: #f1b133;
  margin-top: 4rem;

  p {
    font-size: 1rem;
  }

  .ql-font-serif {
    font-family: serif !important;
    font-size: 1.1rem !important;
  }

  .ql-font-monospace {
    font-family: monospace !important;
    font-size: 1.1rem !important;
  }
`;

const Posts = (props) => {
  const [dados, setDados] = useState([""]);

  const { handle } = useParams();

  const id = useRef(null);

  useEffect(() => {
    axios
      .get(`${serverIp}/postagens/publis/${handle}`)
      .then((e) => setDados(e.data));
  }, []);

  const text = dados.content;
  const doc = new DOMParser().parseFromString(text, "text/html");
  console.log(doc.body);

  useEffect(() => {
    console.log(id);
    id.current.innerHTML = doc.body.innerHTML;
  }, [doc]);

  return (
    <>
      <Bar posi="false" />
      <MobiNav amount="40" />
      <Body color="#272844" vezes="2">
        <Center>
          {!dados == [""] ? (
            <>
              <TextP>{dados.tittle}</TextP>
              <Sub>{dados.subTittle}</Sub>
              <Date>{dados.date}</Date>
              {/* <ListPubli id="div">
                <Ex ref={id} />
              </ListPubli> */}
              <Box ref={id}></Box>
            </>
          ) : (
            <></>
          )}
        </Center>
      </Body>
      <Footer sty={""} />
    </>
  );
};

export default Posts;
