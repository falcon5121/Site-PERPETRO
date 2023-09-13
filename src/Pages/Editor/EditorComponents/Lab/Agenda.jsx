import React from "react";
import ReactQuill from "react-quill";
import "../../QuillStyle.css";
import { LabelInputText, InputText, Container, Btn, Form } from "../../styles";
import { Quill } from "./AgendaStyle";
import { Cor } from "../../../../styles/StylesPages";
import Center from "../../../../Components/Center";

const Agenda = () => {
  return (
    <>
      <LabelInputText htmlFor="tittle">
        Título
        <InputText type={"text"} name="tittle" />
      </LabelInputText>
      <Quill></Quill>
    </>
  );
};

export default Agenda;
