import React from "react";
import { Body } from "../../styles/Styles";
import { Cor, H1 } from "../../styles/StylesPages";
import Bar from "../../Components/Navbar/Bar";
import MobiNav from "../../Components/MobiNav";
import Center from "../../Components/Center";

import { useRef } from "react";

import "./QuillStyle.css";

import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import Loading from "../../Components/Loading";
import { Select, Option } from "./styles";

import Publi from "./EditorComponents/Lab/Publi";
import Agenda from "./EditorComponents/Lab/Agenda";

const Editor = () => {
  const selection = useRef(null);
  const [value, setValue] = useState();

  const getValue = () => {
    setValue(selection.current.value);
  };

  return (
    <Cor onLoad={getValue}>
      <Loading />
      <Bar posi="false" />
      <MobiNav amount="10" />
      <Body
        color="#272844"
        vezes="2"
        estilos={"display: flex; justify-content: center"}
      >
        <Center>
          <Select ref={selection} onChange={(e) => setValue(e.target.value)}>
            <Option value={"Publicaçao"}>Publicação</Option>
            <Option value={"Agenda"}>Agenda</Option>
          </Select>
          {value != null && value == "Publicaçao" ? <Publi /> : ""}
          {value != null && value == "Agenda" ? <Agenda /> : ""}
        </Center>
      </Body>
    </Cor>
  );
};

export default Editor;
