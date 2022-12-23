import React, { useState } from "react";
import { Body } from "../../../../styles/Styles";
import Bar from "../../../../Components/Bar";
import MobiNav from "../../../../Components/MobiNav";
import Center from "../../../../Components/Center";
import Footer from "../../../../Components/Footer";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useRef } from "react";

// import { ListPubli } from "..";

const TextP = styled.h1`
  font-size: 2rem;
  color: #f1b133;
  font-weight: 600;
`;

const Sub = styled.h4`
  color: #f1b133;
  font-weight: 400;
  font-style: italic;
`;
const Date = styled.h5`
  color: #f1b133;
  font-weight: 400;
  font-style: italic;
  float: right;
`;

const Content = styled.p`
  font-size: 5rem;
  color: #f1b133;
`;

const ListPubli = styled.section`
  width: 36rem;
  margin-top: 2rem;
  padding-right: 6rem;
  padding-top: 4rem;
  height: 95%;
  white-space: nowrap;
  overflow: hidden;
  color: #f1b133;

  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// const Conteudo = async () => {
//   const [data, setData] = useState([""]);

//   var parser = new DOMParser();
//   var doc = parser.parseFromString(data.content, "text/html");

//   await axios
//     .get("http://localhost:3001/postagens/publis/5")
//     .then((e) => console.log(e))
//     .catch((err) => console.log(err));

//   return <>{doc}</>;
// };

const Ex = styled.div``;

const Posts = (props) => {
  const [dados, setDados] = useState([""]);
  const [content, setContent] = useState("");
  const [active, setActive] = useState(false);
  const [numero, setNumero] = useState();

  const [teste, setTest] = useState();

  const id = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/postagens/publis/19`)
      .then((e) => setDados(e.data));
  }, []);

  useEffect(() => {
    if (dados.content != undefined) {
      const replaced1 = dados.content.replace("<p>", "<Content>");
      const replaced2 = replaced1.replace("</p>", "</Content>");

      setContent(replaced2);

      id.current.innerHTML = dados.content;
      console.log(id);
    }
  }, [dados]);

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
              <ListPubli id="div">
                <Ex ref={id} />
              </ListPubli>
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
